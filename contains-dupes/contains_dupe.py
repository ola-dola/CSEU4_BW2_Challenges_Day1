def containsDuplicate(nums):
    elements = set()
    for num in nums:
        if num in elements:
            return True
        else:
            elements.add(num)

    return False


print(containsDuplicate([1, 1, 45, 7, 8]))
