class Marker {
    constructor(color, inkPercentage) {
        this.color = color; 
        this.inkPercentage = inkPercentage; 
    }

    print(text) {
        let output = "";
        for (const char of text) {
            if (this.inkPercentage <= 0) {
                console.log("Маркер закінчився!");
                break;
            }

            if (char !== " ") {
                this.inkPercentage -= 0.5; 
            }

            output += char;
        }

        console.log(`%c${output}`, `color: ${this.color}`);
    }
}

class RefillableMarker extends Marker {
    refill(percentage) {
        this.inkPercentage = Math.min(this.inkPercentage + percentage, 100);
    }
}

const marker = new Marker("blue", 10);
marker.print("Hello, world!");

const refillableMarker = new RefillableMarker("red", 5);
refillableMarker.print("This is a refillable marker.");
refillableMarker.refill(20);
refillableMarker.print("Now it has more ink.");

class ExtendedDate extends Date {
    getFormattedDate() {
        return this.toLocaleDateString("uk-UA");
    }

    isFutureDate() {
        return this > new Date();
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    nextDate() {
        const nextDay = new Date(this);
        nextDay.setDate(this.getDate() + 1);
        return nextDay;
    }
}

const extendedDate = new ExtendedDate("2024-12-06");
console.log("Дата:", extendedDate.getFormattedDate());
console.log("Чи майбутня дата:", extendedDate.isFutureDate());
console.log("Чи високосний рік:", extendedDate.isLeapYear());
console.log("Наступна дата:", extendedDate.nextDate().toLocaleDateString("uk-UA"));

class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    getHtml() {
        return `<tr><td>${this.name}</td><td>${this.position}</td></tr>`;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees; 
    }

    getHtml() {
        const rows = this.employees.map(emp => emp.getHtml()).join("\n");
        return `<table border="1">
<tr><th>Ім'я</th><th>Посада</th></tr>
${rows}
</table>`;
    }
}
и
const employees = [
    new Employee("Іван Іванов", "Менеджер"),
    new Employee("Олена Петрова", "Бухгалтер"),
    new Employee("Петро Сидоров", "Програміст")
];

const empTable = new EmpTable(employees);
document.body.innerHTML = empTable.getHtml();

class StyledEmpTable extends EmpTable {
    getStyles() {
        return "style=\"border-collapse: collapse; background-color: #f9f9f9;\"";
    }

    getHtml() {
        const rows = this.employees.map(emp => emp.getHtml()).join("\n");
        return `<table ${this.getStyles()} border="1">
<tr><th>Ім'я</th><th>Посада</th></tr>
${rows}
</table>`;
    }
}

const styledEmpTable = new StyledEmpTable(employees);
document.body.innerHTML += styledEmpTable.getHtml();
