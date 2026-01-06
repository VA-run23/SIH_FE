document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    // Updated to reflect new IDs in HTML if you changed them
    const principalNameInput = document.getElementById('principal-name'); 
    const principalIdInput = document.getElementById('principal-id');
    const startCaptureBtn = document.getElementById('start-capture-btn');
    const captureBtn = document.getElementById('capture-btn');
    const webcamContainer = document.getElementById('webcam-container');
    const webcam = document.getElementById('webcam');
    const canvas = document.getElementById('canvas');
    const errorMessage = document.getElementById('error-message');
    const captureStatus = document.getElementById('capture-status');

    // --- Simulated Backend Data (Updated for Principal) ---
    const CORRECT_NAME = 'principal'; 
    const CORRECT_ID = 'principal123'; 
    let isFaceCaptured = false;
    let stream = null;

    // --- Event Listeners ---
    startCaptureBtn.addEventListener('click', initWebcam);
    captureBtn.addEventListener('click', captureFace);
    loginForm.addEventListener('submit', handleLogin);

    // --- Functions ---
    async function initWebcam() {
        try {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcam.srcObject = stream;
            webcamContainer.style.display = 'block';
            startCaptureBtn.textContent = 'Restart Camera';
            captureStatus.textContent = '';
            isFaceCaptured = false;
        } catch (err) {
            console.error("Error accessing webcam:", err);
            captureStatus.textContent = "Could not access webcam. Please allow permission.";
            captureStatus.style.color = '#e74c3c';
        }
    }

    function captureFace() {
        if (stream) {
            captureStatus.textContent = "✅ Face Captured Successfully!";
            captureStatus.style.color = '#2ecc71';
            isFaceCaptured = true;
            
            const context = canvas.getContext('2d');
            canvas.width = webcam.videoWidth;
            canvas.height = webcam.videoHeight;
            context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
            
            stream.getTracks().forEach(track => track.stop());
            webcamContainer.style.display = 'none';
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        const enteredName = principalNameInput.value;
        const enteredId = principalIdInput.value;

        errorMessage.textContent = '';

        // --- Simulated Verification Logic ---
        if (enteredName.toLowerCase() !== CORRECT_NAME.toLowerCase()) {
            errorMessage.textContent = 'Invalid Name.';
            return;
        }

        if (enteredId !== CORRECT_ID) {
            errorMessage.textContent = 'Invalid Principal ID.';
            return;
        }

        if (!isFaceCaptured) {
            errorMessage.textContent = 'Please complete the face capture step.';
            return;
        }

        alert('Verification Successful! Accessing portal...');
        // *** THIS IS THE KEY CHANGE FOR REDIRECTION ***
        window.location.href = 'dashboard.html'; // Changed from 'announcements.html'
    }
});