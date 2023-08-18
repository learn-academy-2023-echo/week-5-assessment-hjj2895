# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# Create a method that accepts an array and a letter as parameters
# Using the select method, filter out words that include the letter

def array_letter (arr, char)
    arr.select do |word|
        word.include?(char)
    end
end

# p array_letter(beverages_array, filter_letter_o)
# p array_letter(beverages_array, filter_letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# Create a method that accepts a hash as parameter
# Grab the values of hash using .values 
# Use .flatten to get rid of nested array
# Return array sorted using .sort

def sorted_array hash
    hash.values.flatten.sort
end

# p sorted_array(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# Create a class called Bike
# Create a initialize method with a model, wheels, and current_speed
# Initialize value of wheels to 2
# Initialize default value of 0 to current_speed
# Use the attr_accessor and pass in the symbols before initialize
# Create bike_info method
# Return a sentence with all data from bike object

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end

    def pedal_faster num
        @current_speed += num
    end

    def brake num
        @current_speed -= num
        if @current_speed < 0
            @current_speed = 0
        end
        @current_speed
    end

end

bike = Bike.new('Trek')
p bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
# Create a pedal_faster method inside Bike class
# Pass in number as parameter
# increment speed by the given number
# Create a brake method inside Bike class
# Pass in number as parameter
# decrement speed by the given number
# if speed is less than 0, assign speed to 0
p bike.pedal_faster(10)
p bike.pedal_faster(18)
p bike.brake(5)
p bike.brake(25)