require 'pry'

file='values.txt'
data = []
f = File.open(file, "r")
f.each_line { |line|
  data << line
}
f.close

data = data.map {|item| item.to_i}

def calibrate(arr, total = 0, already_seen = {}, dupes = [])

  arr.each do |n|
    total += n

    if !already_seen.key?(total)
      already_seen[total] = 1

    elsif already_seen.key?(total)
      dupes << total
      if dupes.length >= 1
        return dupes[0]
      end
    end
  end

  if dupes.length == 0
    calibrate(arr, total, already_seen, dupes)
  end

end

puts calibrate(data)
