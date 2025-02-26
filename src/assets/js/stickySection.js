// stickySection.js
export function initStickySection() {
  const stickySection = document.getElementById('sticky-section');
  const servicesSection = document.getElementById('services');
  const expertiseSection = document.getElementById('expertise-section');

  function handleScroll() {
    const servicesSectionRect = servicesSection.getBoundingClientRect();
    const expertiseSectionRect = expertiseSection.getBoundingClientRect();

    // Check if we've scrolled to the services section
    if (servicesSectionRect.top <= 0 && expertiseSectionRect.top > 0) {
      // We're in the services section, make the stickySection sticky
      stickySection.classList.add('lg:sticky');
    } else if (expertiseSectionRect.top <= 0) {
      // We've reached the expertise section, unstick
      stickySection.classList.remove('lg:sticky');
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);

  // Initial call
  handleScroll();

  // Optional: return cleanup function for Vue component's unmounted hook
  return function cleanup() {
    window.removeEventListener('scroll', handleScroll);
  };
}
