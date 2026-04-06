import 'dart:io';

class Task {
  String title;
  bool isCompleted;

  Task(this.title, {this.isCompleted = false});
}

List<Task> tasks = [];

void addTask() {
  print("Enter task title:");
  String? title = stdin.readLineSync();

  if (title != null && title.isNotEmpty) {
    tasks.add(Task(title));
    print("✅ Task Added Successfully!\n");
  } else {
    print("❌ Invalid Task!\n");
  }
}

void viewTasks() {
  if (tasks.isEmpty) {
    print("📭 No Tasks Available!\n");
    return;
  }

  print("\n📋 Your Tasks:");
  for (int i = 0; i < tasks.length; i++) {
    String status = tasks[i].isCompleted ? "✔" : "✘";
    print("${i + 1}. ${tasks[i].title} [$status]");
  }
  print("");
}

void updateTask() {
  viewTasks();
  print("Enter task number to update:");
  int? index = int.tryParse(stdin.readLineSync() ?? "");

  if (index != null && index > 0 && index <= tasks.length) {
    print("Enter new title:");
    String? newTitle = stdin.readLineSync();

    if (newTitle != null && newTitle.isNotEmpty) {
      tasks[index - 1].title = newTitle;
      print("✏ Task Updated Successfully!\n");
    }
  } else {
    print("❌ Invalid Task Number!\n");
  }
}

void deleteTask() {
  viewTasks();
  print("Enter task number to delete:");
  int? index = int.tryParse(stdin.readLineSync() ?? "");

  if (index != null && index > 0 && index <= tasks.length) {
    tasks.removeAt(index - 1);
    print("🗑 Task Deleted Successfully!\n");
  } else {
    print("❌ Invalid Task Number!\n");
  }
}

void markCompleted() {
  viewTasks();
  print("Enter task number to mark as completed:");
  int? index = int.tryParse(stdin.readLineSync() ?? "");

  if (index != null && index > 0 && index <= tasks.length) {
    tasks[index - 1].isCompleted = true;
    print("🎉 Task Marked as Completed!\n");
  } else {
    print("❌ Invalid Task Number!\n");
  }
}

void main() {
  while (true) {
    print("====== TO DO LIST MENU ======");
    print("1. Add Task");
    print("2. View Tasks");
    print("3. Update Task");
    print("4. Delete Task");
    print("5. Mark Task as Completed");
    print("6. Exit");
    print("Enter your choice:");

    String? choice = stdin.readLineSync();

    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        viewTasks();
        break;
      case '3':
        updateTask();
        break;
      case '4':
        deleteTask();
        break;
      case '5':
        markCompleted();
        break;
      case '6':
        print("👋 Exiting Program...");
        return;
      default:
        print("❌ Invalid Choice!\n");
    }
  }
}