import json



dict = {}
with open('./test copy.json') as f:
    for obj in f:
       data = json.loads(obj)
       dict[data['pokemon_id']] = data

with open('./pokedata.json', 'w') as f:
    json.dump(dict, f, indent=4)