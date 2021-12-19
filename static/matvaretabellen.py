import json
import requests

url = 'https://matvaretabellen.no/api/foods?language=no&version=75'

print("Fetching data..")
r = requests.get(url)
print("Converting to json..")
data = json.loads(r.content)
foods = data["foods"]
print(f"Got {len(foods)} foods from matvaretabellen.no")
print("Optimizing..")
for food in foods:
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
