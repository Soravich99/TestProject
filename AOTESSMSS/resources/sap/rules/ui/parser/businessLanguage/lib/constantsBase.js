jQuery.sap.declare("sap.rules.ui.parser.businessLanguage.lib.constantsBase");sap.rules.ui.parser.businessLanguage.lib.constantsBase=sap.rules.ui.parser.businessLanguage.lib.constantsBase||{};sap.rules.ui.parser.businessLanguage.lib.constantsBase.lib=(function(){var c={defineEnum:function(d){var k=null;var j;var e=new c.Enum();for(k in d){if(d.hasOwnProperty(k)){j=d[k];e[k]=j;e.addEnum(j);}}return e;},Enum:function(){this.v_enums=[];this.v_lookups={};}};c.Enum.prototype.getEnum=function(){return this.v_enums;};c.Enum.prototype.forEach=function(a){var l=this.v_enums.length;var i;for(i=0;i<l;++i){a(this.v_enums[i]);}};c.Enum.prototype.addEnum=function(e){this.v_enums.push(e);};c.Enum.prototype.getByName=function(n){return this[n];};c.Enum.prototype.getByValue=function(f,v){if(v===""){return null;}var l=this.v_lookups[f];if(l!==undefined&&l[v]!==undefined){return l[v];}else{this.v_lookups[f]=(l={});var k=null;for(k=this.v_enums.length-1;k>=0;--k){var m=this.v_enums[k];var j=m[f];var a=v.toLowerCase();l[j]=m;j=j.toLowerCase();if(a.indexOf(j)!==-1){return m;}}}return null;};c.Enum.prototype.getStringByField=function(f){var l=this.v_lookups[f];var s="";this.v_lookups[f]=(l={});var k=null;for(k=this.v_enums.length-1;k>=0;--k){var m=this.v_enums[k];var j=m[f];l[j]=m;s+=j;s+=" ";}return s;};c.SIMPLE_SELECTION_VALUE_TYPE=(function(){return new c.defineEnum({COLLECTION:{string:'Collection',value:'Collection'},STRING:{string:'String',value:'String'},UNICODE:{string:'UnicodeString',value:'String'},INTEGER:{string:'Number',value:'Number'},TIME:{string:'Time',value:'Time'},TIMESTAMP:{string:'Timestamp',value:'Timestamp'},DATE:{string:'Date',value:'Date'},BOOLEAN:{string:'Boolean',value:'Boolean'},UUID:{string:'Uuid',value:'String'},TIMESPAN:{string:'TimeSpan',value:'TimeSpan'},DECIMAL:{string:'Decimal',value:'Number'},BIGNUMBER:{string:'BigNumber',value:'Number'},STRING_COLLECTION:{string:'StringCollection',value:'String'},UNICODE_COLLECTION:{string:'UnicodeStringCollection',value:'String'},INTEGER_COLLECTION:{string:'NumberCollection',value:'Number'},TIME_COLLECTION:{string:'TimeCollection',value:'Time'},TIMESTAMP_COLLECTION:{string:'TimestampCollection',value:'Timestamp'},DATE_COLLECTION:{string:'DateCollection',value:'Date'},BOOLEAN_COLLECTION:{string:'BooleanCollection',value:'Boolean'},UUID_COLLECTION:{string:'UuidCollection',value:'String'},TIMESPAN_COLLECTION:{string:'TimeSpanCollection',value:'TimeSpan'},DECIMAL_COLLECTION:{string:'DecimalCollection',value:'Number'},BIGNUMBER_COLLECTION:{string:'BigNumberCollection',value:'Number'},NULL:{string:'Null',value:'Null'}});}());return c;}());
