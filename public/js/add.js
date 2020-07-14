const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

async function addStore(e){
    e.preventDefault();

    if(storeId.value === '' || storeAddress === ''){
        alert('Please fill in fields');
    }

    const sendBody = {
        storeId: storeId.value,
        address: storeAddress.value
    }

    try {
        const res = await fetch('api/v1/stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'appliction/json'
            },
            body: JSON.stringify(sendBody)
        });
        if(res.status === 400){
            throw Error('Store already exits!');
        }
        alert('Store added');
        window.location.href = '/index.html';
    } catch(err){
        alert(err);
        return;
    }
}

storeForm.addEventListener('submit', addStore);