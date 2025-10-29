import { Model } from "objection";
import Project from "./Project";

class Category extends Model {
  static get tableName() {
    return "categories";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
    };
  }
  static get relationMappings() {
    return {
      project: {
        relation: Model.HasManyToManyRelation,
        modelClass: Project,
        join: {
          from: "categories.id",
          through: {
            from: "tasks_categories.category_id",
            to: "tasks_categories.task_id",
          },
          to: "tasks.id",
        },
      },
    };
  }
}

export default Category;
