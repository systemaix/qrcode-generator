const qrText = document.getElementById('qrText');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const qrContainer = document.getElementById('qrcode');

let qrCode;

generateBtn.addEventListener('click', () => {
	  const text = qrText.value.trim();
	
	  if (!text) {
			    alert('Please enter text or a URL');
			    return;
		}
	
	  qrContainer.innerHTML = '';
	
	  qrCode = new QRCode(qrContainer, {
			    text: text,
			    width: 180,
			    height: 180,
			    colorDark: '#000000',
			    colorLight: '#ffffff'
		});
});

resetBtn.addEventListener('click', () => {
	  qrText.value = '';
	  qrContainer.innerHTML = '';
});
