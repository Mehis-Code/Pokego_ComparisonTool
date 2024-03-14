import json
import pandas as pd

print('Simulation started')
# Load the JSON files
data1 = []
with open('./GROUP_WORKING.json') as f:
    for line in f:
        data1.append(json.loads(line))
with open('./current_pokemon_moves copy.json') as f:
    data2 = json.load(f)

# Convert the data to pandas DataFrames
df1 = pd.DataFrame(data1)
df2 = pd.DataFrame(data2)

# Concatenate the two DataFrames
combined = pd.concat([df1, df2])

# Filter the DataFrame to only include 'normal' Pokemon
normal_pokemon = combined[combined['form'] == 'Normal']

# Group by 'pokemon_id'
grouped_normal = normal_pokemon.groupby('pokemon_id')

# Print the grouped data
print(grouped_normal.head())

# Aggregate the grouped data and write it to a JSON file
df_grouped_normal = grouped_normal.agg('first')
df_grouped_normal.to_json('test.json', orient='records', lines=True)
df_grouped_normal_reset = df_grouped_normal.reset_index()
df_grouped_normal_reset.to_json('test.json', orient='records', lines=True)