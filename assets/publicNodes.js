const nodes = [
    // turtlenode.io
    { name: 'us-west.turtlenode.io', api: 'https://api.turtlenode.io/node-1.nyc.turtlenode.io/getinfo', hostname: 'node-1.nyc.turtlenode.io', port: 11898, region: 'US West' },
    { name: 'us-east.turtlenode.io', api: 'https://api.turtlenode.io/node-2.nyc.turtlenode.io/getinfo', hostname: 'node-2.nyc.turtlenode.io', port: 11898, region: 'US East' },
    { name: 'europe.turtlenode.io', api: 'https://api.turtlenode.io/node-3.nyc.turtlenode.io/getinfo', hostname: 'node-3.nyc.turtlenode.io', port: 11898, region: 'Europe' },
    { name: 'asia.turtlenode.io', api: 'https://api.turtlenode.io/node-1.sfo.turtlenode.io/getinfo', hostname: 'node-1.sfo.turtlenode.io', port: 11898, region: 'Asia' },
    { name: 'public.turtlenode.io', api: 'https://api.turtlenode.io/node-2.sfo.turtlenode.io/getinfo', hostname: 'node-2.sfo.turtlenode.io', port: 11898, region: 'Global' },
    // turtlenode.net
    { name: 'EU-ITA-DC1 TurtleNode.net', api: 'https://api.turtlenode.net/min-trtl-dc1.xhub.cloud/11999/getinfo', hostname: 'min-trtl-dc1.xhub.cloud', port: 11999, region: 'Europe' },
    { name: 'EU-ITA-DC1-U TurtleNode.net', api: 'https://api.turtlenode.net/u132-xh1-dc1.xhub.cloud/11898/getinfo', hostname: 'u132-xh1-dc1.xhub.cloud', port: 11898, region: 'Europe' },
    { name: 'EU-ITA-DC1-X1 TurtleNode.net', api: 'https://api.turtlenode.net/min-xhc1-dc1.xhub.cloud/11898/getinfo', hostname: 'min-xhc1-dc1.xhub.cloud', port: 11898, region: 'Europe' },
    { name: 'EU-ITA-DC1-X2 TurtleNode.net', api: 'https://api.turtlenode.net/min-xhc2-dc1.xhub.cloud/11898/getinfo', hostname: 'min-xhc2-dc1.xhub.cloud', port: 11898, region: 'Europe' },
    { name: 'EU-GBR-DC6 TurtleNode.net', api: 'https://api.turtlenode.net/min-trtl-dc6.xhub.cloud/11999/getinfo', hostname: 'min-trtl-dc6.xhub.cloud', port: 11999, region: 'Europe' },
    { name: 'EU-FRA-DC4 TurtleNode.net', api: 'https://api.turtlenode.net/min-trtl-dc4.xhub.cloud/11999/getinfo', hostname: 'min-trtl-dc4.xhub.cloud', port: 11999, region: 'Europe' },
    { name: 'EU-DEU-DC5 TurtleNode.net', api: 'https://api.turtlenode.net/min-trtl-dc5.xhub.cloud/11999/getinfo', hostname: 'min-trtl-dc5.xhub.cloud', port: 11999, region: 'Europe' },
    { name: 'EU-POL-DC8 TurtleNode.net', api: 'https://api.turtlenode.net/min-trtl-dc8.xhub.cloud/11999/getinfo', hostname: 'min-trtl-dc8.xhub.cloud', port: 11999, region: 'Europe' },
    { name: 'EU-CZE-DC3 TurtleNode.net', api: 'https://api.turtlenode.net/min-trtl-dc3.xhub.cloud/11999/getinfo', hostname: 'min-trtl-dc3.xhub.cloud', port: 11999, region: 'Europe' }
]