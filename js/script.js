// JavaScript placeholder
console.log('Website loaded');

// Accordion

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Check if the clicked item is already active
            const isActive = accordionItem.classList.contains('active');

            // Close all other active accordion items (if any)
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                if (item !== accordionItem) { // Don't close the current item if it's already active
                    item.classList.remove('active');
                    // Set max-height to 0 for a smooth closing transition
                    item.querySelector('.accordion-content').style.maxHeight = '0px';
                    // Remove content padding when closing
                    item.querySelector('.accordion-content').style.paddingTop = '0';
                    item.querySelector('.accordion-content').style.paddingBottom = '0';
                }
            });

            // Toggle the clicked accordion item
            if (isActive) {
                accordionItem.classList.remove('active');
                // Set max-height to 0 for a smooth closing transition
                accordionContent.style.maxHeight = '0px';
                // Remove content padding when closing
                accordionContent.style.paddingTop = '0';
                accordionContent.style.paddingBottom = '0';
            } else {
                accordionItem.classList.add('active');
                // Set max-height to scrollHeight for smooth transition based on content size
                // Add some extra height to ensure it doesn't cut off if scrollHeight is precise
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 20 + 'px'; // Added 20px buffer
                // Add content padding when opening
                accordionContent.style.paddingTop = '0.5rem';
                accordionContent.style.paddingBottom = '0.5rem';
            }
        });
    });
});
