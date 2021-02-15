#Gil Ben-David T-REX CLI

#CLI Commands - cli-project\bin


#index.js
   ╭───────────────╮
   │               │
   │   T-REX CLI   │
   │               │
   ╰───────────────╯

#readSites.js

   ╭────────────────╮
   │                │
   │   Read Sites   │
   │                │
   ╰────────────────╯

{"siteName":"Barcelona","latitude":"40","longitude":"-105"}
{"siteName":"Melbourne","latitude":"40","longitude":"-105"}
{"siteName":"NewYork","latitude":"40","longitude":"-105"}
{"siteName":"Tokyo","latitude":"40","longitude":"-105"}


#avg_dni.js

   ╭─────────────╮
   │             │    
   │   avg_dni   │
   │             │
   ╰─────────────╯

Site Name: NewYork
avg_dni: {"annual":6.06,"monthly":{"jan":5,"feb":5.34,"mar":5.94,"apr":6.11,"may":6.36,"jun":7.43,"jul":7.48,"aug":6.65,"sep":6.81,"oct":5.82,"nov":5.11,"dec":4.67}}



#avg_ghi.js

   ╭─────────────╮
   │             │
   │   avg_ghi   │
   │             │
   ╰─────────────╯

Site Name: Tokyo
avg_ghi: {"annual":4.81,"monthly":{"jan":2.5,"feb":3.43,"mar":4.69,"apr":5.69,"may":6.6,"jun":7.25,"jul":7.14,"aug":6.24,"sep":5.35,"oct":3.85,"nov":2.75,"dec":2.19}}

#avg_lat_tilt.js

   ╭──────────────────╮
   │                  │
   │   avg_lat_tilt   │
   │                  │
   ╰──────────────────╯

Site Name: Melbourne
avg_lat_tilt: {"annual":4.81,"monthly":{"jan":2.5,"feb":3.43,"mar":4.69,"apr":5.69,"may":6.6,"jun":7.25,"jul":7.14,"aug":6.24,"sep":5.35,"oct":3.85,"nov":2.75,"dec":2.19}}


#runAnalytics.js -s Tokyo|Melbourne|NewYork

   ╭───────────────────╮
   │                   │
   │   Run Analytics   │
   │                   │
   ╰───────────────────╯

Selected Site for Analytics ->  Tokyo!
Site { siteName: 'Tokyo', latitude: '40', longitude: '-105' }
Analytic {"type":"MaxInMonths","metric":"avg_dni","args":[{"months":["jan","feb"]}]}
Analytic {"type":"MinAnnually","metric":"avg_ghi","args":[]}
MinAnnually for site=Tokyo when metric=avg_ghi
MaxInMonths for site=Tokyo when metric=avg_dni