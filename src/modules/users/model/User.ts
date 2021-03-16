import { v4 as uuidV4 } from "uuid";

class User {
  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      const date = new Date();

      this.id = uuidV4();
      this.admin = false;
      this.created_at = date;
      this.updated_at = date;
    }
  }
}

export { User };
