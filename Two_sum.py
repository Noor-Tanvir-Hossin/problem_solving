# Given a sorted array of integers and target value, find the indices(1-based) of two number that add up to the target value.Assume exaclty one slution exists, and you cannot use the same element twice.

numbers = [1,3,4,6,8,10]
target = 9

def two_sum(numbers, target):
    left, right = 0 , len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == target:
            return [left + 1, right +1]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []

print(two_sum(numbers, target))