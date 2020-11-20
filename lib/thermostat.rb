
class Thermostat
  attr_reader :temperature, :location;

  DEFAULT_TEMPERATURE = 20

  def initialize(location = "London")
    @temperature = DEFAULT_TEMPERATURE
    @location = location
  end

  def self.instance
    @thermostat ||= self.new
  end

  def update_temp(temperature)
    @temperature = temperature
  end

  def update_location(location)
    @location = location
  end

end
