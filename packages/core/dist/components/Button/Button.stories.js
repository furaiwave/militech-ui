import { Button } from './Button';
import './Button.css';
const meta = {
    title: 'Militech/Button',
    component: Button,
};
export default meta;
export const Primary = {
    args: {
        children: 'ENGAGE TARGET',
        variant: 'primary',
    },
};
export const Ghost = {
    args: {
        children: 'STAND DOWN',
        variant: 'ghost',
    },
};
export const Danger = {
    args: {
        children: 'SELF DESTRUCT',
        variant: 'danger',
        confirmLabel: 'confirm',
    },
};
export const Terminal = {
    args: {
        children: 'EXECUTE CMD',
        variant: 'terminal',
    },
};
export const Loading = {
    args: {
        children: 'SCANNING...',
        variant: 'primary',
        loading: true,
    },
};
//# sourceMappingURL=Button.stories.js.map