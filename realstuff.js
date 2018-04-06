var markers = [];
  var in_area = [];
  var autocomplete;
  var locations = [
    ['Sudbury Community Food Bank', 42.373700, -71.415700, '160 Concord Rd, Sudbury, MA 01776', 'http://sudburyfoodpantry.org'],
    ['Gaining Ground', 42.4686, -71.312, '2317 Virginia Rd, Concord, MA 01742', 'http://www.gainingground.org'],

    ["Food Bank of Western MA. ",42.398043,-72.614691,"97 North Hatfield Rd Hatfield MA 01038",'https://www.foodbankwma.org'],
    ["Margaret\'s Pantry",42.199156,-72.606279,"56 Cabot St Holyoke MA 01040",'http://www.provministries.org/locations/margarets-pantry'],
    ["Orange Food Pantry",42.590616,-72.30462,"118 E Main St Orange MA 01364",'http://google.com'],
    ["Loaves and Fishes Food Pantry",42.5386,-71.6036,"234 Barnum Road Devens MA 01434",'https://loavesfishespantry.org'],
    ["Berlin Family Food Pantry ",42.38106,-71.640162,"23 Linden st Berlin MA 01503",'http://www.berlinfamilyfoodpantry.org'],
    ["WHEAT Food Pantry/Soup Kitchen ",42.420463,-71.68478,"272 High St Clinton MA 01510",'https://www.uwotc.org/WHEAT'],
    ["Northborough Food pantry",42.322074, -71.641106,"37 Pierce Street Northborough MA 01532",'http://nfpantry.org/nfp/'],
    ["Oxford\'s Food Shelf",42.150151,-71.862906,"4 Maple Rd Oxford MA 01540",'http://oxfordfoodbank.org'],
    ["Worcester county food bank",42.275994,-71.721169,"474 Boston Turnpike Shrewsbury MA 01545",'https://foodbank.org'],
    ["Westborough Food pantry",42.270874,-71.612199,"9 E Main st Westborough MA 01581",'http://westboroughfoodpantry.org'],
    ["Rachel\'s Table",42.295199,-71.838651,"633 Salisbury Street Worcester MA 01609",'http://www.rachelstable.org'],
    ["St. Vincent de Paul - Sacred heart Church",42.252779,-71.827935,"596 Cambridge st.Worcester MA 01609",'https://www.homelessshelterdirectory.org/cgi-bin/id/foodbank.cgi?foodbank=11331'],
    ["The Mustard Seed ",42.261987,-71.812658,"93 Piedmont st Worcester MA 01609",'https://mustardseedcw.org'],
    ["St Vincent de Paul - St. Peter\'s Church",42.250701,-71.820962,"929 Main St.Worcester MA 01610",'http://sharingweb.org/organization/st-peters-church-food-pantry'],
    ["Acton Community Pantry",42.473568,-71.493455,"235 Summer Rd Acton MA 01719",'https://www.actonfoodpantry.org'],
    ["Bedford community table/pantry",42.492583,-71.283041,"12 Mudge Way Bedford MA 01739",'http://www.bedfordfoodpantry.org'],
    ["Hudson Community food pantry",42.3894,71.5661,"28 Houghton St Hudson MA 01749",'http://www.hudsoncommunityfoodpantry.org'],
    ["Marlboro Community Services Inc",42.346794,-71.552174,"255 main street Marlboro MA 01752",'http://google.com'],
    ["Maynard Food Pantry",42.4284,-71.4508,"12 Bancroft St Maynard MA 01754",'http://www.maynardfoodpantry.com'],
    ["Open Table Inc.",42.4335,-71.4495,"33 Main st.Maynard MA 01754",'http://www.opentable.org'],
    ["A Place To Turn",42.293985,",-71.386927","99 Hartford St Natick MA 01760",'http://www.aplacetoturn-natick.org'],
    ["Stow Food Pantry",42.437,71.5056,"509 Great Rd Stow MA 01775",'http://stowfoodpantry.com'],
    ["People helping people Inc. Burlington Food pantry",42.503416,-71.207357,"10 St Marks Rd Burlington MA 01803",'https://peoplehelpingpeopleinc.org'],
    ["Merimack valley food bank",42.643689,-71.330603,"735 Broadway St Lowell MA 01854",'http://mvfb.org'],
    ["Westford Food Bank",42.5792,71.4843,"20 Pleasant Street Westford MA 01886",'http://www.westfordfoodpantry.org/contact.html'],
    ["The Open Door Food Pantry",42.615447,-70.676017,"28 Emerson Avenue Gloucester MA 01930",'http://www.foodpantry.org'],
    ["Acord Food pantry",42.611378,-70.876325,"69 Willow St Hamilton  MA 01982",'http://acordfoodpantry.org'],
    ["Dedham Food Pantry",42.241795,-71.178509,"600 Washington st Dedham  MA 02026",'https://dedhamfoodpantry.org'],
    ["Foxborough Discretionary Food Pantry",42.070515,-71.248217,"35 Neponset av. Foxboro MA 02035",'http://www.foxborofoodpantry.com'],
    ["Franklin Food Pantry ",42.083195,-71.398518,"43 West Central Street Franklin  MA 02038-0116",'https://www.franklinfoodpantry.org'],
    ["Norwell Food Pantry",42.162174,-70.816637,"345 Main St. Norwell MA 02061",'https://www.townofnorwell.net'],
    ["Scituate Food Bank",42.198453,-70.758043,"344 Country Way Scituate  MA 02066",'http://www.scituatefoodpantry.org'],
    ["Greater Boston Food Bank",42.335143,-71.065611,"70 South Bay Avenue Boston MA 02118",'https://www.gbfb.org'],
    ["Project Bread",42.373851,-71.040432,"145 Border St Boston MA 02128",'http://www.projectbread.org'],
    ["Weymouth Food Pantry",42.217657,-70.928608,"1203 Commercial St (Immaculate Conception Church) East Weymouth MA 02189",'https://www.weymouthfoodpantry.org'],
    ["Weymouth Food Pantry",42.1756,-70.951212,"25 Columbian Street Weymouth MA 02190",'https://www.weymouthfoodpantry.org'],
    ["Pembroke Food Pantry ",42.069601,-70.808676,"128 center st. Pembroke MA 02359",'https://www.pembroke-ma.gov/pembroke-food-pantry'],
    ["Friendly Food Pantry",42.162564,-71.042955,"1 Turner Dr, Randolph Randolph MA 02368",'https://www.foodpantries.org/li/friendly_food_pantry_of_randolph_02368'],
    ["Lexington Food Pantry",42.45098,", -71.228845","6 meriam street Lexington MA 02420",'https://lexingtonfoodpantry.wordpress.com'],
    ["Brookline Food Pantry",42.261733,-71.812636,"15 St. Paul st Brookline MA 02446",'http://www.brooklinefoodpantry.org'],
    ["Newton Food pantry",42.337,-71.2092,"1000 Commonwealth av. Newton MA 02459",'http://www.newtonfoodpantry.org'],
    ["Centre Street Food Pantry",42.334947,-71.193863,"11 Homer st Newton MA 02459",'https://www.centrestfoodpantry.org'],
    ["Wellesley Food Pantry",42.3156,-71.2713,"207 Washington Street Wellesley MA 02481",'http://www.wellesleyfoodpantry.org'],
    ["Family Pantry of Cape Cod",41.697496,-70.103009,"133 Queen Anne Rd Harwich MA 02645",'http://www.thefamilypantry.com'],
    ["New Bedford Food Pantry",41.636785,-70.941209,"593 Kempton St New Bedford MA 02740",'http://google.com'],
    ["Watertown Food Pantry",42.367466,-71.181302,"80 mt Auburn street Watertown MA 02472",'http://www.watertown-ma.gov/index.aspx?nid=250'],

	];

  var geocoder = new google.maps.Geocoder();

  autocomplete = new google.maps.places.Autocomplete((document.getElementById('locator_text')));

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 42.373700,
      lng: -71.415700
    },
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  for (i = 0; i < locations.length; i++) {if (window.CP.shouldStopExecution(1)){break;}
    add_marker(locations);
  }
window.CP.exitedLoop(1);


  google.maps.event.addDomListener(window, "resize", function() {
    centermap();
  });

  $('#locator').submit(function(e) {
    e.preventDefault();
    var address = $('input[type="text"]').val();
    var radiusmiles = parseInt($('select').val());
    var radiusmetric = radiusmiles / 0.000621371192;
    in_area = [];

    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {

        var searchedlocation = results[0].geometry.location;
        var circle = new google.maps.Circle({
          radius: radiusmetric,
          center: searchedlocation
        });
        map.setCenter(searchedlocation);
        map.fitBounds(circle.getBounds());

        for (i = 0; i < locations.length; i++) {if (window.CP.shouldStopExecution(2)){break;}
          var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
          var distance = google.maps.geometry.spherical.computeDistanceBetween(searchedlocation, position);

          if (distance <= radiusmetric) {
            markers[i].setMap(map);
            in_area.push([locations[i][0], locations[i][3], locations[i][4], (distance * 0.000621371192).toFixed(2)]);
          } else {
            markers[i].setMap(null);
          }

        }
window.CP.exitedLoop(2);

        resultstotal(in_area.length, radiusmiles, address, circle);
      }
    });

  });

  function centermap() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  }

  function add_marker(arraymarkers) {
    var latlng = new google.maps.LatLng(arraymarkers[i][1], arraymarkers[i][2]);
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: 'http://chart.apis.google.com/chart?cht=d&chdp=mapsapi&chl=pin%27i%5c%27%5b%27-2%27f%5chv%27a%5c%5dh%5c%5do%5c0099FF%27fC%5c000000%27tC%5c000000%27eC%5cLauto%27f%5c&ext=.png'
    });
    markers[i] = marker;
  }

  function resultstotal(resultstotal, radius, search, circlearea) {
    $('main').empty().append('<p class="col">' + resultstotal + ' Food pantries within ' + radius + 'miles of ' + search + '</p><ol class="col"></ol>');
    in_area.sort(function(a, b) {
      return a[3] - b[3];
    });
    for (i = 0; i < in_area.length; i++) {if (window.CP.shouldStopExecution(3)){break;}

      var dealername = in_area[i][0];
      var dealeraddress = in_area[i][1];
      var dealeremail = in_area[i][2];
      var distanceround = in_area[i][3];

      $('main ol').append('<li>' +
        '<h4>' + dealername + ' (' + distanceround + ' mi away)</h4>' +
        '<p>' + dealeraddress + '</p>' +
        '<a href=' + dealeremail + '>' + dealeremail + '</a>' +
        '</li>');
    }
window.CP.exitedLoop(3);


    $('main, #map').addClass('active');

    $('html, body').animate({
      scrollTop: $("main").offset().top
    }, 500);
    $('main').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(e) {
      centermap();
      map.fitBounds(circlearea.getBounds());
    });

  }
      //# sourceURL=pen.js
