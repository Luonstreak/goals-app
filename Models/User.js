import { Model } from "objection";
import Project from "./Project";

class User extends Model {
  static get tableName() {
    return "users";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["full_name", "email", "password"],
      properties: {
        full_name: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string", format: "password" },
      },
    };
  }
  static get relationMappings() {
    return {
      projects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: "users.id",
          to: "projects.user_id",
        },
      },
    };
  }
}

export default User;
