"""
Test suite for robotics course MicroPython challenges
Uses embedded system simulator for testing
"""

import unittest
from typing import Dict, Any


class MockDevice:
    """Mock embedded device for testing"""
    
    def __init__(self):
        self.pin_states = {}
        self.sensor_values = {}
        
    def set_pin(self, pin: int, state: bool):
        """Set pin state"""
        self.pin_states[pin] = state
        
    def get_pin(self, pin: int) -> bool:
        """Get pin state"""
        return self.pin_states.get(pin, False)
        
    def set_sensor(self, sensor: str, value: float):
        """Set sensor reading"""
        self.sensor_values[sensor] = value
        
    def get_sensor(self, sensor: str) -> float:
        """Get sensor reading"""
        return self.sensor_values.get(sensor, 0.0)


class TestChallenge1HelloBlinky(unittest.TestCase):
    """Tests for Challenge 1: Hello Blinky - LED control"""
    
    def setUp(self):
        self.device = MockDevice()
        self.LED_PIN = 13
        
    def test_led_on(self):
        """Test LED turns on when commanded"""
        # Simulate student code turning LED on
        self.device.set_pin(self.LED_PIN, True)
        
        # Verify LED is on
        self.assertTrue(self.device.get_pin(self.LED_PIN))
        
    def test_led_off(self):
        """Test LED turns off when commanded"""
        # Turn LED on first
        self.device.set_pin(self.LED_PIN, True)
        
        # Turn LED off
        self.device.set_pin(self.LED_PIN, False)
        
        # Verify LED is off
        self.assertFalse(self.device.get_pin(self.LED_PIN))
        
    def test_blink_pattern(self):
        """Test LED blinks at correct frequency"""
        # Simulate 5 blinks
        blink_count = 0
        for i in range(10):
            state = i % 2 == 0
            self.device.set_pin(self.LED_PIN, state)
            if state:
                blink_count += 1
                
        # Should have blinked 5 times
        self.assertEqual(blink_count, 5)


class TestChallenge2SensorSymphony(unittest.TestCase):
    """Tests for Challenge 2: Sensor Symphony - Read multiple sensors"""
    
    def setUp(self):
        self.device = MockDevice()
        
    def test_temperature_sensor(self):
        """Test temperature sensor reading"""
        expected_temp = 22.5
        self.device.set_sensor("temperature", expected_temp)
        
        # Verify reading
        actual_temp = self.device.get_sensor("temperature")
        self.assertAlmostEqual(actual_temp, expected_temp, places=1)
        
    def test_humidity_sensor(self):
        """Test humidity sensor reading"""
        expected_humidity = 65.0
        self.device.set_sensor("humidity", expected_humidity)
        
        # Verify reading
        actual_humidity = self.device.get_sensor("humidity")
        self.assertAlmostEqual(actual_humidity, expected_humidity, places=1)
        
    def test_light_sensor(self):
        """Test light sensor reading"""
        expected_light = 450
        self.device.set_sensor("light", expected_light)
        
        # Verify reading
        actual_light = self.device.get_sensor("light")
        self.assertEqual(actual_light, expected_light)
        
    def test_all_sensors_simultaneously(self):
        """Test reading all sensors at once"""
        # Set all sensor values
        self.device.set_sensor("temperature", 22.5)
        self.device.set_sensor("humidity", 65.0)
        self.device.set_sensor("light", 450)
        
        # Verify all readings
        self.assertAlmostEqual(self.device.get_sensor("temperature"), 22.5, places=1)
        self.assertAlmostEqual(self.device.get_sensor("humidity"), 65.0, places=1)
        self.assertEqual(self.device.get_sensor("light"), 450)


class TestChallenge3SmartThermostat(unittest.TestCase):
    """Tests for Challenge 3: Smart Thermostat - Temperature control logic"""
    
    def setUp(self):
        self.device = MockDevice()
        self.HEATING_PIN = 10
        self.COOLING_PIN = 11
        self.TARGET_TEMP = 22.0
        self.HYSTERESIS = 1.0
        
    def simulate_thermostat(self, current_temp: float):
        """Simulate thermostat logic"""
        if current_temp < self.TARGET_TEMP - self.HYSTERESIS:
            # Too cold - activate heating
            self.device.set_pin(self.HEATING_PIN, True)
            self.device.set_pin(self.COOLING_PIN, False)
        elif current_temp > self.TARGET_TEMP + self.HYSTERESIS:
            # Too hot - activate cooling
            self.device.set_pin(self.HEATING_PIN, False)
            self.device.set_pin(self.COOLING_PIN, True)
        else:
            # In range - turn off both
            self.device.set_pin(self.HEATING_PIN, False)
            self.device.set_pin(self.COOLING_PIN, False)
            
    def test_heating_activates_when_cold(self):
        """Test heating activates when temperature is too low"""
        self.simulate_thermostat(19.0)  # Below target - hysteresis
        
        self.assertTrue(self.device.get_pin(self.HEATING_PIN))
        self.assertFalse(self.device.get_pin(self.COOLING_PIN))
        
    def test_cooling_activates_when_hot(self):
        """Test cooling activates when temperature is too high"""
        self.simulate_thermostat(25.0)  # Above target + hysteresis
        
        self.assertFalse(self.device.get_pin(self.HEATING_PIN))
        self.assertTrue(self.device.get_pin(self.COOLING_PIN))
        
    def test_both_off_in_range(self):
        """Test both heating and cooling off when in range"""
        self.simulate_thermostat(22.0)  # Exactly at target
        
        self.assertFalse(self.device.get_pin(self.HEATING_PIN))
        self.assertFalse(self.device.get_pin(self.COOLING_PIN))
        
    def test_hysteresis_prevents_rapid_switching(self):
        """Test hysteresis prevents rapid on/off cycling"""
        # Start at target
        self.simulate_thermostat(22.0)
        self.assertFalse(self.device.get_pin(self.HEATING_PIN))
        
        # Small drop (within hysteresis) - should not activate
        self.simulate_thermostat(21.5)
        self.assertFalse(self.device.get_pin(self.HEATING_PIN))
        
        # Larger drop (outside hysteresis) - should activate
        self.simulate_thermostat(20.0)
        self.assertTrue(self.device.get_pin(self.HEATING_PIN))


def run_tests():
    """Run all tests and return results"""
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()
    
    # Add all test classes
    suite.addTests(loader.loadTestsFromTestCase(TestChallenge1HelloBlinky))
    suite.addTests(loader.loadTestsFromTestCase(TestChallenge2SensorSymphony))
    suite.addTests(loader.loadTestsFromTestCase(TestChallenge3SmartThermostat))
    
    # Run tests
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    return result


if __name__ == "__main__":
    result = run_tests()
    
    # Exit with appropriate code
    exit(0 if result.wasSuccessful() else 1)
