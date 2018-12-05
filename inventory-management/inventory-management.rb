
#PART I

file='input.txt'

data = []
f = File.open(file, "r")
f.each_line { |line|
  data << line
}
f.close


def calculate(arr)
  letters = {}
  two_of_a_kind = []
  three_of_a_kind = []
  double = 0
  triple = 0

  arr.each do |samp|
    samp.gsub!(/\s/,'').split('').each do |char|
      if letters[char]
        letters[char] += 1
      else
        letters[char] = 1
      end
    end

    letters.each do |k,v|
      if v == 3
        three_of_a_kind << v
      elsif v == 2
        two_of_a_kind << v
      end
    end

    if two_of_a_kind.length > 0
      double += 1
    end

    if three_of_a_kind.length > 0
      triple += 1
    end

    letters = {}
    two_of_a_kind = []
    three_of_a_kind = []
  end
  return double * triple
end

puts calculate(data)
