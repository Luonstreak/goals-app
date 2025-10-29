import { Model } from "objection";
import Project from "./Project";
import Goal from "./Goal";
import Label from "./Label";

class Task extends Model {
  static get tableName() {
    return "tasks";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description"],
    };
  }
  static get relationMappings() {
    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: "tasks.project_id",
          to: "projects.id",
        },
      },
      goal: {
        relation: Model.BelongsToOneRelation,
        modelClass: Goal,
        join: {
          from: "tasks.goal_id",
          to: "goals.id",
        },
      },
      labels: {
        relation: Model.HasManyRelation,
        modelClass: Label,
        join: {
          from: "tasks.id",
          to: "labels.task_id",
        },
      },
    };
  }
}

export default Task;
