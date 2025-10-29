import { Model } from "objection";
import User from "./User";
import Goal from "./Goal";
import Task from "./Task";
import Category from "./Category";

class Project extends Model {
  static get tableName() {
    return "projects";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description"],
    };
  }
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "projects.user_id",
          to: "users.id",
        },
      },
      goals: {
        relation: Model.HasManyRelation,
        modelClass: Goal,
        join: {
          from: "projects.id",
          to: "goals.project_id",
        },
      },
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: "projects.id",
          to: "tasks.project_id",
        },
      },
      categories: {
        relation: Model.HasManyRelation,
        modelClass: Category,
        join: {
          from: "projects.id",
          to: "categories.project_id",
        },
      },
    };
  }
}

export default Project;
