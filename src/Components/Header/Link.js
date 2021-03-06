import React from 'react'

function Link({href,children}) {
    const onClick=(event)=>{
        if(event.metaKey || event.ctrlKey) {
            return
        }
        event.preventDefault();
        window.history.pushState({},'',href)
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)

    }
    return <a 
              href={href}
              onClick={onClick}
            >
                {children}
                </a>
}

export default Link
