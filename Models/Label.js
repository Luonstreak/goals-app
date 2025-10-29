import { Model } from "objection";
import Task from "./Task";

class Label extends Model {
  static get tableName() {
    return "labels";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    };
  }
  static get relationMappings() {
    return {
      tasks: {
        relation: Model.ManyToManyRelation,
        modelClass: Task,
        join: {
          from: "labels.id",
          through: {
            from: "tasks_labels.label_id",
            to: "tasks_labels.task_id",
          },
          to: "tasks.id",
        },
      },
    };
  }
}

export default Label;
