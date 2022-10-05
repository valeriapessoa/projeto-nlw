import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({     //Alerta de Notificação para permitir acessar as configurações do celular
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});