/**
 * 
 * @gang Blur
 * @album Blur
 * @song Chinese Bombs
 * 
 */

import { Toaster, toast as sonnerToast } from "sonner";
import './Toast.css'

export const MilitechToaster = () => (
    <Toaster 
        position="bottom-right"
        toastOptions={{
            classNames: {
                toast: 'mlt-toast',
                title: 'mlt-toast__title',
                description: 'mlt-toast__desc',
                actionButton: 'mlt-toast__action',
                cancelButton: 'mlt-toast__cancel',
                closeButton: 'mlt-toast__close',
                success: 'mlt-toast--success',
                error: 'mlt-toast--error',
                warning: 'mlt-toast--warning',
                info: 'mlt-toast--info',
            }
        }}
    />
)

export const toast = {
    default: (title: string, description?: string) => sonnerToast(title, { description }),
    success: (title: string, description?: string) => sonnerToast.success(title, { description }),
    error: (title: string, description?: string) => sonnerToast.error(title, { description }),
    warning: (title: string, description?: string) => sonnerToast.warning(title, { description }),
    info: (title: string, description?: string) => sonnerToast.info(title, {description }),
    classified: (title: string, description?: string) => sonnerToast(title, { description, className: 'mlt-toast-classified' })
}