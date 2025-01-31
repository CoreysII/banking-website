document.addEventListener('DOMContentLoaded', function () {
    const accounts = [
        { id: 1, name: 'Checking Account', balance: 1000 },
        { id: 2, name: 'Savings Account', balance: 5000 }
    ];

    function displayAccounts() {
        const accountList = document.getElementById('account-list');
        accountList.innerHTML = '';
        accounts.forEach(account => {
            const li = document.createElement('li');
            li.textContent = `${account.name}: $${account.balance.toFixed(2)}`;
            accountList.appendChild(li);
        });

        const fromAccountSelect = document.getElementById('from-account');
        const toAccountSelect = document.getElementById('to-account');
        fromAccountSelect.innerHTML = '';
        toAccountSelect.innerHTML = '';
        accounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account.id;
            option.textContent = account.name;
            fromAccountSelect.appendChild(option);
            toAccountSelect.appendChild(option.cloneNode(true));
        });
    }

    document.getElementById('transfer-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const fromAccountId = parseInt(document.getElementById('from-account').value);
        const toAccountId = parseInt(document.getElementById('to-account').value);
        const amount = parseFloat(document.getElementById('amount').value);

        if (fromAccountId === toAccountId) {
            alert('Cannot transfer to the same account.');
            return;
        }

        const fromAccount = accounts.find(account => account.id === fromAccountId);
        const toAccount = accounts.find(account => account.id === toAccountId);

        if (fromAccount.balance < amount) {
            alert('Insufficient funds.');
            return;
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;
        displayAccounts();
        alert('Transfer successful.');
    });

    displayAccounts();
});
