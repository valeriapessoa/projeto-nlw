import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
    const { granted } = await Notifications.getPermissionsAsync();     // Verifica se o usuário aceitou receber notificações

    if (!granted) {
        await Notifications.requestPermissionsAsync();      //Se o dispositivo não tem permissão para receber notificação, vai ser solicitado a autorização.
    }

    if(granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log('NOTIFICATION TOKEN =>', pushToken.data);

        return pushToken.data;
    }
}
