# Puerto estándar para TURN y STUN
listening-port=3478

# Puerto TLS para TURN seguro (opcional)
tls-listening-port=5349

# Interfaz de red para escuchar (0.0.0.0 escucha en todas)
listening-ip=0.0.0.0

# IP pública del servidor (importante para relaying)
relay-ip=<IP_PÚBLICA_DEL_SERVIDOR>

# Autenticación
lt-cred-mech
user=usuario:contraseña

# Configuración del realm
realm=midominio.com

# Logs
log-file=/var/log/turnserver.log
simple-log

# Habilitar relay
no-multicast-peers
