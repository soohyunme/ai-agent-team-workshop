const copyButton = document.getElementById('copy-template');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const field = document.getElementById('template-json');
    const status = document.getElementById('copy-status');
    const korean = document.documentElement.lang === 'ko';
    try {
      await navigator.clipboard.writeText(field.value);
      status.textContent = korean
        ? '복사했습니다. 텍스트 편집기에 붙여넣고 아래 안내에 따라 저장하세요.'
        : 'Copied. Paste into a text editor and save using the instructions below.';
    } catch {
      field.focus();
      field.select();
      status.textContent = korean
        ? '자동 복사가 허용되지 않았습니다. 선택된 내용을 Ctrl+C(Windows) 또는 ⌘C(Mac)로 복사하세요.'
        : 'Automatic copying was not allowed. Copy the selected text with Ctrl+C (Windows) or ⌘C (Mac).';
    }
  });
}
