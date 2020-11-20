
class Thermostat
  attr_reader :temperature;

  DEFAULT_TEMPERATURE = 20

  def initialize(location = "London")
    @temperature = DEFAULT_TEMPERATURE
    @power_save_mode = true
    @location = location
  end

  def self.instance
    @thermostat ||= self.new
  end

  def update_temp(temperature)
    @temperature = temperature
  end

  def update_psm(psm)
    @power_save_mode = psm
  end

  def update_location(location)
    @location = location
  end

end
