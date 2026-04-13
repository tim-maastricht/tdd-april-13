const request = require("supertest");
const app = require("../src/index");
const { clearTasks } = require("../src/utils");

beforeEach(() => {
  clearTasks();
});

describe("POST /tasks", () => {
  it("should create a new task", async () => {
    const taskData = { title: "Buy mineral water" };

    const response = await request(app).post("/tasks").send(taskData);

    expect(response.body.title).toBe("Buy mineral water");
    expect(response.body.id).toBe(1);
  });

  it("should reject a task without a title", async () => {
    const response = await request(app).post("/tasks").send({}).expect(400);

    expect(response.body.error).toBe("Title is required.");
  });
});

describe("GET /tasks", () => {
  it("should get the tasks after POST", async () => {
    await request(app).post("/tasks").send({ title: "Walk dog" });

    const response = await request(app).get("/tasks").expect(200);

    expect(response.body.tasks.length).toBeGreaterThan(0);
    expect(response.body.tasks[0].title).toBe("Walk dog");
  });
});
