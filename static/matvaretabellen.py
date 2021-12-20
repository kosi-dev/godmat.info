import json
import requests

url = 'https://matvaretabellen.no/api/foods?&version=75'

print("Fetching data..")
r = requests.get(url)
print("Converting to json..")
data = json.loads(r.content)
foods = data["foods"]
print(f"Got {len(foods)} foods from matvaretabellen.no")
print("Optimizing..")

for i, food in enumerate(foods):
    newFood = {}
    newFood["nutrition"] = food
    foods[i] = newFood

    for key in (
            "groupId",
            "id",
            "name",
            "slug",
            ):
        newFood[key] = food[key]
        del food[key]

    illegal = ("~", "*", "/", "[", "]")
    newFood["name"] = "".join([c for c in newFood["name"] if not c in illegal])
    if newFood["name"].endswith("."):
        newFood["name"] = newFood["name"][:-1]
    if newFood["name"].startswith("."):
        newFood["name"] = newFood["name"][1:]
    
    for key in (
            "synonym",
            "sortName",
            "additionalInfo",
            "latinFamilyName",
            "latinName",
            "latinAuthor",
            "langualCodes"
            ):
        del food[key]
    
    for key, value in food.items():
        if type(value) == dict:
            food[key] = value["value"]
    for key, value in food.items():
        try:
            food[key] = float(value)
        except:
            pass
    
print("Writing to file..")
with open("static/matvaretabellen.json", "w") as file:
    json.dump(data, file, indent=2)
print("Success!")
