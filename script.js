function openSignUpBlock() {
    document.getElementById('signUpBlock').classList.add('active');
    document.getElementById('confirmationMessage').classList.add('hidden');
}

function closeSignUpBlock() {
    document.getElementById('signUpBlock').classList.remove('active');
}

function submitSignUpBlock() {
    const name = document.getElementById('blockName').value.trim();
    const email = document.getElementById('blockEmail').value.trim();
    const password = document.getElementById('blockPassword').value.trim();

    if (name && email && password) {
        document.getElementById('confirmationMessage').classList.remove('hidden');
        alert(`Confirmation email has been sent to ${email}!`);
        document.getElementById('blockName').value = '';
        document.getElementById('blockEmail').value = '';
        document.getElementById('blockPassword').value = '';
    } else {
        alert("Please have some Common sense! Complete all the text boxes!");
}
}

document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to Our Product Showcase!";
    const typingEffect = document.getElementById("typingEffect");

    let i = 0;
    function typeText() {
        if (i < text.length) {
            typingEffect.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeText, 50);
        }
    }

    document.querySelector('[href="#productsScreen"]').addEventListener('click', typeText);
});
