
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

export const initializeFontAwesomeLibrary = () => {
    library.add(
        faGhost, 
        faCircle, 
        faCheckCircle, 
    );
}