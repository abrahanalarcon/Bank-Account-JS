// Definir la Clase BankAccount
class BankAccount {
    constructor(account_number, account_holder) {  ///Esto define un constructor para la clase. 
                    // Un constructor es una función especial que se ejecuta cuando se crea un nuevo objeto a 
                 //   partir de la clase. En este caso, toma dos parámetros: account_number (número de cuenta) 
                 //   y account_holder (titular de la cuenta).
                  //   Cuando se crea una nueva instancia de BankAccount, 
                  //   estos valores se pasan al constructor.

         //Atributos 
        this.account_number = account_number;//
        this.account_holder = account_holder;
        this.balance = 0;


    }


    //Funciones 
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            alert("Fondos insuficientes");
        }
    }

    clearBalance() {
        this.balance = 0;
    }


    get_balance() {
        return this.balance;
    }
}

// Crear una instancia de BankAccount
const account = new BankAccount("123456789", "Moises");

// Actualizar la información en la página
document.getElementById('accountNumber').textContent = account.account_number;
document.getElementById('accountHolder').textContent = account.account_holder;

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        account.deposit(amount);
        updateBalance();
        clearForm();
    } else {
        alert("Ingrese un monto válido");
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        account.withdraw(amount);
        updateBalance();
        clearForm();
    } else {
        alert("Ingrese un monto válido");
    }
}

function updateBalance() {
    document.getElementById('balance').textContent = `$${account.get_balance().toFixed(2)}`;
}

function clearForm() {
    document.getElementById('amount').value = ''; // Limpiar el campo de monto
}   

const clearBalanceButton = document.getElementById('clearBalanceButton');

// Agrega un evento de clic al botón que llama a la función clearBalance
clearBalanceButton.addEventListener('click', function() {
    account.clearBalance();
    updateBalance(); // Asegúrate de actualizar la visualización del balance si es necesario
});