document.querySelectorAll('.collapsible-header').forEach(btn =>
  btn.addEventListener('click', () => {
    const collapsibleContent = btn.nextElementSibling;
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
      collapsibleContent.style.maxHeight =
        collapsibleContent.scrollHeight + 'rem';
    } else {
      collapsibleContent.style.maxHeight = 0;
    }
  })
);
