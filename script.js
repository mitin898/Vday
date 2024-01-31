function revealMessage(option) {
    const messageElement = document.getElementById('message');

    switch (option) {
        case 1:
            messageElement.innerHTML = "You will have a day filled with joy!";
            break;
        case 2:
            messageElement.innerHTML = "A surprise awaits you!";
            break;
        case 3:
            // The final message (Valentine's Day question)
            const finalMessage = "Will you be my Valentine?";
            messageElement.innerHTML = finalMessage;

            // Optionally, you can add an event listener to display a special message or take action when he clicks the final option.
            document.getElementById('options').style.display = 'none'; // Hide the options after the final choice.
            break;
        default:
            messageElement.innerHTML = "Choose a valid option!";
            break;
    }
}
