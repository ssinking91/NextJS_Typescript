migrate((db) => {
  const collection = new Collection({
    "id": "vivhafnhqm8852y",
    "created": "2023-02-08 06:14:00.224Z",
    "updated": "2023-02-08 06:14:00.224Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dt64s0iu",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vivhafnhqm8852y");

  return dao.deleteCollection(collection);
})
