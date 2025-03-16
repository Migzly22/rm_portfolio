export const redirect = (path: string) =>  window.location.href = path; 

export const forceScrollToSection = (sectionId : any) => {
    const tryScroll = () => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Force scroll with multiple methods
        element.scrollIntoView({ behavior: 'smooth' })
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        })
      }
    }
    
    tryScroll()
  
    setTimeout(tryScroll, 100)
    setTimeout(tryScroll, 300)
    setTimeout(tryScroll, 500)
  }
  