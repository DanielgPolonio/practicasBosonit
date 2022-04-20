export const menubar = [
    {
        label: 'Perfil',
        items: [
            {
                label: 'Editar',
                icon: 'pi pi-user-edit'
            }
        ]
    },
    {
        label: 'Cuenta',
        items: [
            {
                label: 'Contraseña',
                icon: 'pi pi-key',

            },
            {
                label: 'Verificacion 2 pasos',
                icon: 'pi pi-check',

            },

        ]
    },

    {
        separator: true
    },
    {
        label: 'Log out',
        routerLink: ['/logout']
    },
]