var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-collapse-cell']],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-collapse-cell--disabled'],[1,'']]],[[2,'?:'],[[7],[3,'isOpen']],[1,'uni-collapse-cell--open'],[1,'']]]]]])
Z([[2,'?:'],[[7],[3,'disabled']],[1,''],[1,'uni-collapse-cell--hover']])
Z([3,'__e'])
Z([3,'uni-collapse-cell__title header'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'thumb']])
Z([3,'__l'])
Z([3,'#bbb'])
Z([3,'20'])
Z([3,'arrowdown'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([3,'uni-popup'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'question_detail_content'])
Z([[7],[3,'isSeeImg']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isSeeImg']]],[[2,'>'],[[6],[[6],[[7],[3,'questionDetail']],[3,'images']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[7],[3,'isSeeImg']],[[2,'>'],[[6],[[6],[[7],[3,'questionDetail']],[3,'images']],[3,'length']],[1,0]]])
Z([[2,'=='],[[6],[[7],[3,'answerDetail']],[3,'status']],[1,1]])
Z([[2,'!'],[[7],[3,'isComment']]])
Z([[7],[3,'isComment']])
Z([[7],[3,'isAddAnswer']])
Z([3,'add_answer_content'])
Z([[2,'=='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
Z([3,'add_attachment'])
Z([3,'border-bottom:none;margin-bottom:50rpx;'])
Z([[2,'!'],[[7],[3,'videoSrc']]])
Z([[7],[3,'videoSrc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'questionList']])
Z(z[1])
Z([3,'__e'])
Z([3,'tab_list_1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'questionList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'images']])
Z([3,'__l'])
Z([3,'ask_popup vue-ref'])
Z([3,'popup'])
Z([3,'false'])
Z([3,'center'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[2])
Z([[7],[3,'tagList']])
Z(z[1])
Z([3,'tagsIndex'])
Z([3,'tagsItem'])
Z([[6],[[7],[3,'item']],[3,'child']])
Z(z[20])
Z([3,'popup_tag_list'])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tab_content'])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,0]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,1]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'questionList']])
Z(z[3])
Z([3,'__e'])
Z([3,'tab_list_1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toQuestionDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'questionList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'images']])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,2]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,3]])
Z(z[3])
Z(z[4])
Z([[7],[3,'peopleList']])
Z(z[3])
Z([3,'tab_list_3'])
Z([3,'index2'])
Z([3,'items'])
Z([[6],[[7],[3,'item']],[3,'tag']])
Z(z[18])
Z(z[20])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_follow']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_follow']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input_content'])
Z([[2,'!'],[[7],[3,'isCountdown']]])
Z([[7],[3,'isCountdown']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tab_content'])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,0]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tab_content'])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'questionList']])
Z(z[2])
Z([3,'tab_list_1_inner'])
Z([3,'article_title article_title1'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_take']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_take']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_answer']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_answer']],[1,1]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,1]])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[2])
Z(z[7])
Z(z[8])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[2,'=='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
Z([3,'add_attachment'])
Z([3,'border-bottom:none;margin-bottom:50rpx;'])
Z([[2,'!'],[[7],[3,'videoSrc']]])
Z([[7],[3,'videoSrc']])
Z([3,'__l'])
Z([3,'ask_popup vue-ref'])
Z([3,'popup'])
Z([3,'false'])
Z([3,'center'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tagList']])
Z(z[13])
Z([3,'tagsIndex'])
Z([3,'tagsItem'])
Z([[6],[[7],[3,'item']],[3,'child']])
Z(z[17])
Z([3,'popup_tag_list'])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'question_detail_content'])
Z([[7],[3,'isSeeImg']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isSeeImg']]],[[2,'>'],[[6],[[6],[[7],[3,'questionDetail']],[3,'images']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[7],[3,'isSeeImg']],[[2,'>'],[[6],[[6],[[7],[3,'questionDetail']],[3,'images']],[3,'length']],[1,0]]])
Z([[2,'=='],[[6],[[7],[3,'questionDetail']],[3,'is_answer']],[1,1]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'answerList']])
Z(z[5])
Z([3,'__e'])
Z([3,'question_answer_list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toAnswer']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'answerList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'author_msg_right'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'questionDetail']],[3,'is_adopt']],[1,1]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'images']],[3,'length']],[1,0]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isAddAnswer']]],[[2,'=='],[[6],[[7],[3,'questionDetail']],[3,'is_answer']],[1,1]]])
Z([[7],[3,'isAddAnswer']])
Z([3,'add_answer_content'])
Z([[2,'=='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
Z([3,'add_attachment'])
Z([3,'border-bottom:none;margin-bottom:50rpx;'])
Z([[2,'!'],[[7],[3,'videoSrc']]])
Z([[7],[3,'videoSrc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'tab_list tab_list_3'])
Z([3,'padding-bottom:20rpx;'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'peopleDetail']],[3,'tag']])
Z(z[3])
Z(z[5])
Z([[2,'=='],[[6],[[7],[3,'peopleDetail']],[3,'is_follow']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'peopleDetail']],[3,'is_follow']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
Z([3,'add_attachment'])
Z([3,'border-bottom:none;margin-bottom:50rpx;'])
Z([[2,'!'],[[7],[3,'videoSrc']]])
Z([[7],[3,'videoSrc']])
Z([3,'__l'])
Z([3,'ask_popup vue-ref'])
Z([3,'popup'])
Z([3,'false'])
Z([3,'center'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z(z[4])
Z([[7],[3,'tagList']])
Z(z[3])
Z([3,'tagsIndex'])
Z([3,'tagsItem'])
Z([[6],[[7],[3,'item']],[3,'child']])
Z(z[26])
Z([3,'popup_tag_list'])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tagList']])
Z(z[0])
Z([3,'tagsIndex'])
Z([3,'tagsItem'])
Z([[6],[[7],[3,'item']],[3,'child']])
Z(z[4])
Z([3,'popup_tag_list'])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'tagsItem']],[3,'is_checked']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-collapse-item/uni-collapse-item.wxml','./components/uni-collapse/uni-collapse.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-tag/uni-tag.wxml','./pages/answerDetail/answerDetail.wxml','./pages/ask/ask.wxml','./pages/index/index.wxml','./pages/information/information.wxml','./pages/login/login.wxml','./pages/my/my.wxml','./pages/myAnswer/myAnswer.wxml','./pages/myQuestion/myQuestion.wxml','./pages/question/question.wxml','./pages/questionDetail/questionDetail.wxml','./pages/questionToTalent/questionToTalent.wxml','./pages/setTag/setTag.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'hoverClass',1],[],e,s,gg)
var xC=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
}
var fE=_mz(z,'uni-icons',['bind:__l',6,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(xC,fE)
oD.wxXCkey=1
_(oB,xC)
var cF=_n('slot')
_(oB,cF)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oH=_n('slot')
_(r,oH)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_v()
_(r,lK)
if(_oz(z,0,e,s,gg)){lK.wxVkey=1
var aL=_mz(z,'view',['catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var tM=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var eN=_mz(z,'view',['catchtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var bO=_n('slot')
_(eN,bO)
_(tM,eN)
_(aL,tM)
_(lK,aL)
}
lK.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var xQ=_v()
_(r,xQ)
if(_oz(z,0,e,s,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var fS=_n('view')
_rz(z,fS,'class',0,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,1,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,2,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(fS,oV)
if(_oz(z,3,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(fS,cW)
if(_oz(z,4,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(fS,oX)
if(_oz(z,5,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(fS,lY)
if(_oz(z,6,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(fS,aZ)
if(_oz(z,7,e,s,gg)){aZ.wxVkey=1
var t1=_n('view')
_rz(z,t1,'class',8,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,9,e,s,gg)){e2.wxVkey=1
}
var b3=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,12,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,13,e,s,gg)){x5.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
_(t1,b3)
e2.wxXCkey=1
_(aZ,t1)
}
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
_(r,fS)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_v()
_(f7,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],cAB,o0,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,8,cAB,o0,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
_(oBB,aDB)
return oBB
}
c8.wxXCkey=2
_2z(z,3,h9,e,s,gg,c8,'item','index','index')
var eFB=_mz(z,'uni-popup',['bind:__l',9,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var bGB=_v()
_(eFB,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=function(oPB,cOB,lQB,gg){
var tSB=_n('view')
_rz(z,tSB,'class',24,oPB,cOB,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,25,oPB,cOB,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,26,oPB,cOB,gg)){bUB.wxVkey=1
}
eTB.wxXCkey=1
bUB.wxXCkey=1
_(lQB,tSB)
return lQB
}
hMB.wxXCkey=2
_2z(z,22,oNB,oJB,xIB,gg,hMB,'tagsItem','tagsIndex','tagsIndex')
return fKB
}
bGB.wxXCkey=2
_2z(z,18,oHB,e,s,gg,bGB,'item','index','index')
_(f7,eFB)
_(r,f7)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var xWB=_n('view')
_rz(z,xWB,'class',0,e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,1,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(xWB,fYB)
if(_oz(z,2,e,s,gg)){fYB.wxVkey=1
var o2B=_v()
_(fYB,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],l5B,o4B,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,10,l5B,o4B,gg)){b9B.wxVkey=1
}
b9B.wxXCkey=1
_(a6B,e8B)
return a6B
}
o2B.wxXCkey=2
_2z(z,5,c3B,e,s,gg,o2B,'item','index','index')
}
var cZB=_v()
_(xWB,cZB)
if(_oz(z,11,e,s,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(xWB,h1B)
if(_oz(z,12,e,s,gg)){h1B.wxVkey=1
var o0B=_v()
_(h1B,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_n('view')
_rz(z,oFC,'class',17,fCC,oBC,gg)
var lIC=_v()
_(oFC,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_v()
_(bMC,xOC)
if(_oz(z,22,eLC,tKC,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
return bMC
}
lIC.wxXCkey=2
_2z(z,20,aJC,fCC,oBC,gg,lIC,'items','index2','index2')
var cGC=_v()
_(oFC,cGC)
if(_oz(z,23,fCC,oBC,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,24,fCC,oBC,gg)){oHC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
_(cDC,oFC)
return cDC
}
o0B.wxXCkey=2
_2z(z,15,xAC,e,s,gg,o0B,'item','index','index')
}
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
h1B.wxXCkey=1
_(r,xWB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cRC=_n('view')
_rz(z,cRC,'class',0,e,s,gg)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,1,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(cRC,oTC)
if(_oz(z,2,e,s,gg)){oTC.wxVkey=1
}
hSC.wxXCkey=1
oTC.wxXCkey=1
_(r,cRC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var lWC=_n('view')
_rz(z,lWC,'class',0,e,s,gg)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,1,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(lWC,tYC)
if(_oz(z,2,e,s,gg)){tYC.wxVkey=1
}
aXC.wxXCkey=1
tYC.wxXCkey=1
_(r,lWC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,1,e,s,gg)){o2C.wxVkey=1
var o4C=_v()
_(o2C,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_n('view')
_rz(z,o0C,'class',6,h7C,c6C,gg)
var tCD=_n('view')
_rz(z,tCD,'class',7,h7C,c6C,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,8,h7C,c6C,gg)){eDD.wxVkey=1
}
var bED=_v()
_(tCD,bED)
if(_oz(z,9,h7C,c6C,gg)){bED.wxVkey=1
}
eDD.wxXCkey=1
bED.wxXCkey=1
_(o0C,tCD)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,10,h7C,c6C,gg)){lAD.wxVkey=1
}
var aBD=_v()
_(o0C,aBD)
if(_oz(z,11,h7C,c6C,gg)){aBD.wxVkey=1
}
lAD.wxXCkey=1
aBD.wxXCkey=1
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=2
_2z(z,4,f5C,e,s,gg,o4C,'item','index','index')
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,12,e,s,gg)){x3C.wxVkey=1
var oFD=_v()
_(x3C,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_n('view')
_rz(z,oLD,'class',17,fID,oHD,gg)
var cMD=_v()
_(oLD,cMD)
if(_oz(z,18,fID,oHD,gg)){cMD.wxVkey=1
}
var oND=_v()
_(oLD,oND)
if(_oz(z,19,fID,oHD,gg)){oND.wxVkey=1
}
cMD.wxXCkey=1
oND.wxXCkey=1
_(cJD,oLD)
return cJD
}
oFD.wxXCkey=2
_2z(z,15,xGD,e,s,gg,oFD,'item','index','index')
}
o2C.wxXCkey=1
x3C.wxXCkey=1
_(r,b1C)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var aPD=_n('view')
_rz(z,aPD,'class',0,e,s,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,1,e,s,gg)){tQD.wxVkey=1
}
var eRD=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var bSD=_v()
_(eRD,bSD)
if(_oz(z,4,e,s,gg)){bSD.wxVkey=1
}
var oTD=_v()
_(eRD,oTD)
if(_oz(z,5,e,s,gg)){oTD.wxVkey=1
}
bSD.wxXCkey=1
oTD.wxXCkey=1
_(aPD,eRD)
var xUD=_mz(z,'uni-popup',['bind:__l',6,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var oVD=_v()
_(xUD,oVD)
var fWD=function(hYD,cXD,oZD,gg){
var o2D=_v()
_(oZD,o2D)
var l3D=function(t5D,a4D,e6D,gg){
var o8D=_n('view')
_rz(z,o8D,'class',21,t5D,a4D,gg)
var x9D=_v()
_(o8D,x9D)
if(_oz(z,22,t5D,a4D,gg)){x9D.wxVkey=1
}
var o0D=_v()
_(o8D,o0D)
if(_oz(z,23,t5D,a4D,gg)){o0D.wxVkey=1
}
x9D.wxXCkey=1
o0D.wxXCkey=1
_(e6D,o8D)
return e6D
}
o2D.wxXCkey=2
_2z(z,19,l3D,hYD,cXD,gg,o2D,'tagsItem','tagsIndex','tagsIndex')
return oZD
}
oVD.wxXCkey=2
_2z(z,15,fWD,e,s,gg,oVD,'item','index','index')
_(aPD,xUD)
tQD.wxXCkey=1
_(r,aPD)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var cBE=_n('view')
_rz(z,cBE,'class',0,e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,1,e,s,gg)){hCE.wxVkey=1
}
var oDE=_v()
_(cBE,oDE)
if(_oz(z,2,e,s,gg)){oDE.wxVkey=1
}
var cEE=_v()
_(cBE,cEE)
if(_oz(z,3,e,s,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(cBE,oFE)
if(_oz(z,4,e,s,gg)){oFE.wxVkey=1
}
var tIE=_v()
_(cBE,tIE)
var eJE=function(oLE,bKE,xME,gg){
var fOE=_mz(z,'view',['catchtap',9,'class',1,'data-event-opts',2],[],oLE,bKE,gg)
var hQE=_n('view')
_rz(z,hQE,'class',12,oLE,bKE,gg)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,13,oLE,bKE,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(hQE,cSE)
if(_oz(z,14,oLE,bKE,gg)){cSE.wxVkey=1
}
oRE.wxXCkey=1
cSE.wxXCkey=1
_(fOE,hQE)
var cPE=_v()
_(fOE,cPE)
if(_oz(z,15,oLE,bKE,gg)){cPE.wxVkey=1
}
cPE.wxXCkey=1
_(xME,fOE)
return xME
}
tIE.wxXCkey=2
_2z(z,7,eJE,e,s,gg,tIE,'item','index','index')
var lGE=_v()
_(cBE,lGE)
if(_oz(z,16,e,s,gg)){lGE.wxVkey=1
}
var aHE=_v()
_(cBE,aHE)
if(_oz(z,17,e,s,gg)){aHE.wxVkey=1
var oTE=_n('view')
_rz(z,oTE,'class',18,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,19,e,s,gg)){lUE.wxVkey=1
}
var aVE=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
var tWE=_v()
_(aVE,tWE)
if(_oz(z,22,e,s,gg)){tWE.wxVkey=1
}
var eXE=_v()
_(aVE,eXE)
if(_oz(z,23,e,s,gg)){eXE.wxVkey=1
}
tWE.wxXCkey=1
eXE.wxXCkey=1
_(oTE,aVE)
lUE.wxXCkey=1
_(aHE,oTE)
}
hCE.wxXCkey=1
oDE.wxXCkey=1
cEE.wxXCkey=1
oFE.wxXCkey=1
lGE.wxXCkey=1
aHE.wxXCkey=1
_(r,cBE)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oZE=_n('view')
_rz(z,oZE,'class',0,e,s,gg)
var o2E=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var h5E=_v()
_(o2E,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_v()
_(l9E,tAF)
if(_oz(z,7,o8E,c7E,gg)){tAF.wxVkey=1
}
tAF.wxXCkey=1
return l9E
}
h5E.wxXCkey=2
_2z(z,5,o6E,e,s,gg,h5E,'item','index','index')
var f3E=_v()
_(o2E,f3E)
if(_oz(z,8,e,s,gg)){f3E.wxVkey=1
}
var c4E=_v()
_(o2E,c4E)
if(_oz(z,9,e,s,gg)){c4E.wxVkey=1
}
f3E.wxXCkey=1
c4E.wxXCkey=1
_(oZE,o2E)
var x1E=_v()
_(oZE,x1E)
if(_oz(z,10,e,s,gg)){x1E.wxVkey=1
}
var eBF=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var bCF=_v()
_(eBF,bCF)
if(_oz(z,13,e,s,gg)){bCF.wxVkey=1
}
var oDF=_v()
_(eBF,oDF)
if(_oz(z,14,e,s,gg)){oDF.wxVkey=1
}
bCF.wxXCkey=1
oDF.wxXCkey=1
_(oZE,eBF)
var xEF=_mz(z,'uni-popup',['bind:__l',15,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var oFF=_v()
_(xEF,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_v()
_(oJF,oLF)
var lMF=function(tOF,aNF,ePF,gg){
var oRF=_n('view')
_rz(z,oRF,'class',30,tOF,aNF,gg)
var xSF=_v()
_(oRF,xSF)
if(_oz(z,31,tOF,aNF,gg)){xSF.wxVkey=1
}
var oTF=_v()
_(oRF,oTF)
if(_oz(z,32,tOF,aNF,gg)){oTF.wxVkey=1
}
xSF.wxXCkey=1
oTF.wxXCkey=1
_(ePF,oRF)
return ePF
}
oLF.wxXCkey=2
_2z(z,28,lMF,hIF,cHF,gg,oLF,'tagsItem','tagsIndex','tagsIndex')
return oJF
}
oFF.wxXCkey=2
_2z(z,24,fGF,e,s,gg,oFF,'item','index','index')
_(oZE,xEF)
x1E.wxXCkey=1
_(r,oZE)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var cVF=_v()
_(r,cVF)
var hWF=function(cYF,oXF,oZF,gg){
var a2F=_v()
_(oZF,a2F)
var t3F=function(b5F,e4F,o6F,gg){
var o8F=_n('view')
_rz(z,o8F,'class',8,b5F,e4F,gg)
var f9F=_v()
_(o8F,f9F)
if(_oz(z,9,b5F,e4F,gg)){f9F.wxVkey=1
}
var c0F=_v()
_(o8F,c0F)
if(_oz(z,10,b5F,e4F,gg)){c0F.wxVkey=1
}
f9F.wxXCkey=1
c0F.wxXCkey=1
_(o6F,o8F)
return o6F
}
a2F.wxXCkey=2
_2z(z,6,t3F,cYF,oXF,gg,a2F,'tagsItem','tagsIndex','tagsIndex')
return oZF
}
cVF.wxXCkey=2
_2z(z,2,hWF,e,s,gg,cVF,'item','index','index')
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/index/index","pages/ask/ask","pages/myQuestion/myQuestion","pages/questionToTalent/questionToTalent","pages/question/question","pages/answerDetail/answerDetail","pages/questionDetail/questionDetail","pages/myAnswer/myAnswer","pages/questionDetail/questionDetail","pages/login/login","pages/setTag/setTag","pages/setTag/setTag","pages/my/my","pages/login/login","pages/information/information"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"工控系统","navigationBarBackgroundColor":"#005CB7","backgroundColor":"#ffffff"},"tabBar":{"color":"#888888","selectedColor":"#005cb7","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/img/btn_home@2x.png","selectedIconPath":"static/img/btn_home_pre@2x.png"},{"pagePath":"pages/ask/ask","text":"问答","iconPath":"static/img/btn_answer@2x.png","selectedIconPath":"static/img/btn_answer_pre@2x.png"},{"pagePath":"pages/information/information","text":"资料","iconPath":"static/img/btn_ziliao@2x.png","selectedIconPath":"static/img/btn_ziliao_pre@2x.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/img/btn_mine@2x.png","selectedIconPath":"static/img/btn_mine_pre@2x.png"}],"midButton":{"width":"80px","height":"70px","text":"","iconWidth":"24px","backgroundImage":"static/img/btn_ask@2x.png"}},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"com.lanchonggk.gk","compilerVersion":"2.4.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-collapse-item/uni-collapse-item.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/uni-collapse-item/uni-collapse-item.wxml']=$gwx('./components/uni-collapse-item/uni-collapse-item.wxml');

__wxAppCode__['components/uni-collapse/uni-collapse.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-collapse/uni-collapse.wxml']=$gwx('./components/uni-collapse/uni-collapse.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-tag/uni-tag.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-tag/uni-tag.wxml']=$gwx('./components/uni-tag/uni-tag.wxml');

__wxAppCode__['pages/answerDetail/answerDetail.json']={"navigationBarTitleText":" ","usingComponents":{}};
__wxAppCode__['pages/answerDetail/answerDetail.wxml']=$gwx('./pages/answerDetail/answerDetail.wxml');

__wxAppCode__['pages/ask/ask.json']={"navigationBarTitleText":"问答","titleNView":false,"scrollIndicator":"none","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup","uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item"}};
__wxAppCode__['pages/ask/ask.wxml']=$gwx('./pages/ask/ask.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首 页","titleNView":false,"scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/information/information.json']={"navigationBarTitleText":"资料","usingComponents":{}};
__wxAppCode__['pages/information/information.wxml']=$gwx('./pages/information/information.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登 录","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/my/my.json']={"navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/myAnswer/myAnswer.json']={"navigationBarTitleText":"我的回答","usingComponents":{}};
__wxAppCode__['pages/myAnswer/myAnswer.wxml']=$gwx('./pages/myAnswer/myAnswer.wxml');

__wxAppCode__['pages/myQuestion/myQuestion.json']={"navigationBarTitleText":"我的提问","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/myQuestion/myQuestion.wxml']=$gwx('./pages/myQuestion/myQuestion.wxml');

__wxAppCode__['pages/question/question.json']={"navigationBarTitleText":"提 问","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup","uni-tag":"/components/uni-tag/uni-tag"}};
__wxAppCode__['pages/question/question.wxml']=$gwx('./pages/question/question.wxml');

__wxAppCode__['pages/questionDetail/questionDetail.json']={"navigationBarTitleText":" ","usingComponents":{}};
__wxAppCode__['pages/questionDetail/questionDetail.wxml']=$gwx('./pages/questionDetail/questionDetail.wxml');

__wxAppCode__['pages/questionToTalent/questionToTalent.json']={"navigationBarTitleText":"向工控达人提问","scrollIndicator":"none","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/questionToTalent/questionToTalent.wxml']=$gwx('./pages/questionToTalent/questionToTalent.wxml');

__wxAppCode__['pages/setTag/setTag.json']={"navigationBarTitleText":"标签设置","usingComponents":{}};
__wxAppCode__['pages/setTag/setTag.wxml']=$gwx('./pages/setTag/setTag.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"030e":function(n,e,t){"use strict";t.r(e);var o=t("6c4a");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("d1a2"),t("b583");var a,r,c=t("2877"),i=Object(c["a"])(o["default"],a,r,!1,null,null,null);e["default"]=i.exports},3698:function(n,e,t){"use strict";(function(n){t("91f7"),t("921b");var e=u(t("66fd")),o=u(t("030e"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app";var c=new e.default(a({},o.default));n(c).$mount()}).call(this,t("6e42")["createApp"])},"59b6":function(n,e,t){},"6c4a":function(n,e,t){"use strict";t.r(e);var o=t("9ae2"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=u.a},"85b9":function(n,e,t){},"9ae2":function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log(n("App Launch"," at App.vue:4")),t.onTabBarMidButtonTap(function(){t.navigateTo({url:"../../pages/question/question"})})},onShow:function(){console.log(n("App Show"," at App.vue:12"))},onHide:function(){console.log(n("App Hide"," at App.vue:15"))}};e.default=o}).call(this,t("0de9")["default"],t("6e42")["default"])},b583:function(n,e,t){"use strict";var o=t("85b9"),u=t.n(o);u.a},d1a2:function(n,e,t){"use strict";var o=t("59b6"),u=t.n(o);u.a}},[["3698","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, a = n[0], c = n[1], l = n[2], p = 0, s = []; p < a.length; p++) {
      r = a[p], u[r] && s.push(u[r][0]), u[r] = 0;
    }

    for (o in c) {
      Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    }

    f && f(n);

    while (s.length) {
      s.shift()();
    }

    return i.push.apply(i, l || []), t();
  }

  function t() {
    for (var e, n = 0; n < i.length; n++) {
      for (var t = i[n], o = !0, r = 1; r < t.length; r++) {
        var a = t[r];
        0 !== u[a] && (o = !1);
      }

      o && (i.splice(n--, 1), e = c(c.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, c), t.l = !0, t.exports;
  }

  c.e = function (e) {
    var n = [],
        t = {
      "components/uni-collapse-item/uni-collapse-item": 1,
      "components/uni-collapse/uni-collapse": 1,
      "components/uni-popup/uni-popup": 1,
      "components/uni-tag/uni-tag": 1,
      "components/uni-icons/uni-icons": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/uni-collapse-item/uni-collapse-item": "components/uni-collapse-item/uni-collapse-item",
        "components/uni-collapse/uni-collapse": "components/uni-collapse/uni-collapse",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/uni-tag/uni-tag": "components/uni-tag/uni-tag",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons"
      }[e] || e) + ".wxss", u = c.p + o, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var l = i[a],
            p = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (p === o || p === u)) return n();
      }

      var s = document.getElementsByTagName("style");

      for (a = 0; a < s.length; a++) {
        l = s[a], p = l.getAttribute("data-href");
        if (p === o || p === u) return n();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = n, f.onerror = function (n) {
        var o = n && n.target && n.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        i.request = o, delete r[e], f.parentNode.removeChild(f), t(i);
      }, f.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      r[e] = 0;
    }));
    var o = u[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var i = new Promise(function (n, t) {
        o = u[e] = [n, t];
      });
      n.push(o[2] = i);
      var l,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, c.nc && p.setAttribute("nonce", c.nc), p.src = a(e), l = function l(n) {
        p.onerror = p.onload = null, clearTimeout(s);
        var t = u[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            i.type = o, i.request = r, t[1](i);
          }

          u[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        l({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = l, document.head.appendChild(p);
    }
    return Promise.all(n);
  }, c.m = e, c.c = o, c.d = function (e, n, t) {
    c.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, n) {
    if (1 & n && (e = c(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (c.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      c.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, c.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(n, "a", n), n;
  }, c.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = l.push.bind(l);
  l.push = n, l = l.slice();

  for (var s = 0; s < l.length; s++) {
    n(l[s]);
  }

  var f = p;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},1706:function(t,e,n){"use strict";(function(t){function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){function e(){var t=this;r(this,e),a(this,"config",{baseUrl:"",header:{"Content-Type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text"}),a(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e,n){e&&n&&(t.requestComFun=e,t.requestComFail=n)}})}return i(e,[{key:"requestBeforeFun",value:function(t){return t}},{key:"requestComFun",value:function(t){return t}},{key:"requestComFail",value:function(t){return t}},{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"request",value:function(){var r=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.baseUrl=this.config.baseUrl,o.dataType=o.dataType||this.config.dataType,o.responseType=o.responseType||this.config.responseType,o.url=e.posUrl(o.url)?o.url:o.baseUrl+o.url,o.data=o.data||{},o.header=o.header||this.config.header,o.method=o.method||this.config.method,new Promise(function(e,i){var a=!0,s=null;o.complete=function(t){var n=t.statusCode;t.config=s,200===n?(t=r.requestComFun(t),e(t)):(t=r.requestComFail(t),i(t))};var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n={errMsg:t,config:e};i(n),a=!1};s=n({},r.requestBeforeFun(o,u)),a&&t.request(s)})}},{key:"get",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"GET"},r))}},{key:"post",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"POST"},r))}},{key:"put",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"PUT"},r))}},{key:"delete",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"DELETE"},r))}},{key:"connect",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"CONNECT"},r))}},{key:"head",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"HEAD"},r))}},{key:"options",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"OPTIONS"},r))}},{key:"trace",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:t,data:e,method:"TRACE"},r))}}],[{key:"posUrl",value:function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}}]),e}();e.default=s}).call(this,n("6e42")["default"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"55a5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.http=void 0;var r=i(n("1706")),o=n("d710");function i(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=new r.default;e.http=u,u.setConfig(function(t){return t.baseUrl=o.requesrUrl,t}),u.interceptor.request(function(t,e){return t.header=a({},t.header,{b:1}),t}),u.interceptor.response(function(t){return t},function(t){return t})},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),k=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/\B([A-Z])/g,S=w(function(t){return t.replace(A,"-$1").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var T=Function.prototype.bind?x:j;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function E(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&E(e,t[n]);return e}function C(t,e,n){}var I=function(t,e,n){return!1},N=function(t){return t};function q(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return q(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return q(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(q(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:C,parsePlatformTagName:N,mustUseProp:I,async:!0,_lifecycleHooks:M},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function L(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+F.source+".$_\\d]");function J(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,K="__proto__"in{},G="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Q&&WXEnvironment.platform.toLowerCase(),Z=G&&window.navigator.userAgent.toLowerCase(),Y=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(G)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===W&&(W=!G&&!Q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},it=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=C,ft=0,lt=function(){this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function dt(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var ht=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(ht.prototype,vt);var _t=function(t){void 0===t&&(t="");var e=new ht;return e.text=t,e.isComment=!0,e};function yt(t){return new ht(void 0,void 0,void 0,String(t))}function gt(t){var e=new ht(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var $t=Object.getOwnPropertyNames(bt),Ot=!0;function kt(t){Ot=t}var At=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(K?t.push!==t.__proto__.push?jt(t,bt,$t):St(t,bt):jt(t,bt,$t),this.observeArray(t)):this.walk(t)};function St(t,e){t.__proto__=e}function jt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function xt(t,e){var n;if(u(t)&&!(t instanceof ht))return b(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:Ot&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Tt(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&xt(e),i.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Tt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Et(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Tt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Ct=V.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&It(r,o):Dt(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?It(r,o):o}:e?t?function(){return It("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function qt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var o=Object.create(t||null);return e?E(o,e):o}Ct.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},M.forEach(function(t){Ct[t]=qt}),U.forEach(function(t){Ct[t+"s"]=Bt}),Ct.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in E(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return E(o,t),e&&E(o,e),o},Ct.provide=Nt;var Ut=function(t,e){return void 0===e?t:e};function Mt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Vt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?E({from:i},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Lt(t,e,n){if("function"===typeof e&&(e=e.options),Mt(e,n),Vt(e,n),Ft(e),!e._base&&(e.extends&&(t=Lt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Lt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=Ct[r]||Ut;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=k(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Gt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===S(t)){var u=Gt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Jt(r,o,t);var c=Ot;kt(!0),xt(a),kt(c)}return a}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Kt(t,e){return Wt(t)===Wt(e)}function Gt(t,e){if(!Array.isArray(e))return Kt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Kt(e[n],t))return n;return-1}function Qt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Zt(eo,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{dt()}}function Xt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&d(i)&&!i._handled&&(i.catch(function(t){return Qt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Qt(eo,r,o)}return i}function Zt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Yt(eo,null,"config.errorHandler")}Yt(t,e,n)}function Yt(t,e,n){if(!G&&!Q||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(C)}}else if(Y||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Qt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){le(t,ce),ce.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof ht)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Xt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Xt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function he(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=pe(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=de(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=pe(u),o(l.name,e[u],l.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=S(c);_e(a,u,c,f,!0)||_e(a,s,c,f,!1)}return a}}function _e(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(f[u]=yt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(c)?f[u]=yt(c.text+a):""!==a&&f.push(yt(a)):me(a)&&me(c)?f[u]=yt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function $e(t){var e=Oe(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(n){Tt(t,n,e[n])}),kt(!0))}function Oe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function ke(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Ae)&&delete n[c];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=je(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=xe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function Te(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=E(E({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Ee(t){return Ht(this.$options,"filters",t,!0)||N}function Pe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ce(t,e,n,r,o){var i=V.keyCodes[e]||n;return o&&r&&!V.keyCodes[e]?Pe(o,r):i?Pe(i,t):r?S(r)!==e:void 0}function Ie(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=S(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function qe(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Be(t[r],e+"_"+r,n);else Be(t,e,n)}function Be(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ue(t,e){if(e)if(f(e)){var n=t.on=t.on?E({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Me(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Me(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ve(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Le(t){t._o=qe,t._n=v,t._s=h,t._l=Te,t._t=De,t._q=q,t._i=R,t._m=Ne,t._f=Ee,t._k=Ce,t._b=Ie,t._v=yt,t._e=_t,t._u=Me,t._g=Ue,t._d=Ve,t._p=Fe}function He(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Oe(c.inject,o),this.slots=function(){return u.$slots||Se(t.scopedSlots,u.$slots=ke(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Se(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Se(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function ze(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=zt(f,c,e||n);else o(r.attrs)&&We(u,r.attrs),o(r.props)&&We(u,r.props);var l=new He(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof ht)return Je(p,r,l.parent,s,l);if(Array.isArray(p)){for(var d=ge(p)||[],h=new Array(d.length),v=0;v<d.length;v++)h[v]=Je(d[v],r,l.parent,s,l);return h}}function Je(t,e,n,r,o){var i=gt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function We(t,e){for(var n in e)t[O(n)]=e[n]}Le(He.prototype);var Ke={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ke.prepatch(n,n)}else{var r=t.componentInstance=Xe(t,On);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,En(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ln(n):Tn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},Ge=Object.keys(Ke);function Qe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=hn(f,c),void 0===t))return dn(f,e,n,a,s);e=e||{},pr(t),o(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(i(t.options.functional))return ze(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Ze(e);var h=t.options.name||s,v=new ht("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Xe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ge.length;n++){var r=Ge[n],o=e[r],i=Ke[r];o===i||o&&o._merged||(e[r]=o?Ye(i,o):i)}}function Ye(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return _t();if(o(n)&&o(n.is)&&(e=n.is),!e)return _t();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=ge(r):i===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),a=V.isReservedTag(e)?new ht(V.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new ht(e,n,r,void 0,void 0,t):Qe(u,n,t,r,e)):a=Qe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):_t()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=ke(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Tt(t,"$attrs",i&&i.attrs||n,null,!0),Tt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function ln(t){Le(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Se(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Qt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof ht||(t=_t()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function dn(t,e,n,r,o){var i=_t();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function hn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=B(function(n){t.resolved=pn(n,e),s?a.length=0:l(!0)}),h=B(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,h);return u(v)&&(d(v)?r(t.resolved)&&v.then(p,h):d(v.component)&&(v.component.then(p,h),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&h(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function gn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){cn=t,he(e,n||{},gn,mn,bn,t),cn=void 0}function $n(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Xt(n[i],e,r,e,o)}return e}}var On=null;function kn(t){var e=On;return On=t,function(){On=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Sn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=kn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){En(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),En(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){kt(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var d=l[p],h=t.$options.props;f[d]=zt(d,h,e,t)}kt(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),c&&(t.$slots=ke(i,o.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Tn(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Tn(t.$children[n]);En(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);En(t,"deactivated")}}function En(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Xt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Pn=[],Cn=[],In={},Nn=!1,qn=!1,Rn=0;function Bn(){Rn=Pn.length=Cn.length=0,In={},Nn=qn=!1}var Un=Date.now;if(G&&!Y){var Mn=window.performance;Mn&&"function"===typeof Mn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return Mn.now()})}function Vn(){var t,e;for(Un(),qn=!0,Pn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Pn.length;Rn++)t=Pn[Rn],t.before&&t.before(),e=t.id,In[e]=null,t.run();var n=Cn.slice(),r=Pn.slice();Bn(),Hn(n),Fn(r),it&&V.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&En(r,"updated")}}function Ln(t){t._inactive=!1,Cn.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Tn(t[e],!0)}function zn(t){var e=t.id;if(null==In[e]){if(In[e]=!0,qn){var n=Pn.length-1;while(n>Rn&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);Nn||(Nn=!0,ue(Vn))}}var Jn=0,Wn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Qt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),dt(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Qt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Kn={enumerable:!0,configurable:!0,get:C,set:C};function Gn(t,e,n){Kn.get=function(){return this[e][n]},Kn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Kn)}function Qn(t){t._watchers=[];var e=t.$options;e.props&&Xn(t,e.props),e.methods&&ir(t,e.methods),e.data?Zn(t):xt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Xn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||kt(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Tt(r,i,a),i in t||Gn(t,"_props",i)};for(var s in e)a(s);kt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Yn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||L(i)||Gn(t,"_data",i)}xt(e,!0)}function Yn(t,e){pt();try{return t.call(e,e)}catch(eo){return Qt(eo,e,"data()"),{}}finally{dt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Wn(t,a||C,C,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Kn.get=r?rr(e):or(n),Kn.set=C):(Kn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):C,Kn.set=n.set||C),Object.defineProperty(t,e,Kn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?C:T(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Et,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Qt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=Lt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),yn(e),un(e),En(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&$e(e),Qn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&En(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=dr(t);o&&E(t.extendOptions,o),e=t.options=Lt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function hr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Lt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Lt(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,U.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=E({},a.options),o[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Gn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){U.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function $r(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Or(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=wr(a.componentOptions);s&&!e(s)&&kr(n,i,r,o)}}}function kr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}fr(hr),ur(hr),$n(hr),Sn(hr),ln(hr);var Ar=[String,RegExp,Array],Sr={name:"keep-alive",abstract:!0,props:{include:Ar,exclude:Ar,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)kr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Or(t,function(t){return $r(e,t)})}),this.$watch("exclude",function(e){Or(t,function(t){return!$r(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!$r(i,r))||a&&r&&$r(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&kr(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:Sr};function xr(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:E,mergeOptions:Lt,defineReactive:Tt},t.set=Dt,t.delete=Et,t.nextTick=ue,t.observable=function(t){return xt(t),t},t.options=Object.create(null),U.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,E(t.options.components,jr),vr(t),_r(t),yr(t),br(t)}xr(hr),Object.defineProperty(hr.prototype,"$isServer",{get:ot}),Object.defineProperty(hr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(hr,"FunctionalRenderContext",{value:He}),hr.version="2.6.10";var Tr="[object Array]",Dr="[object Object]";function Er(t,e){var n={};return Pr(t,e),Cr(t,e,"",n),n}function Pr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Dr&&r==Dr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Pr(i,e[o])}}else n==Tr&&r==Tr&&t.length>=e.length&&e.forEach(function(e,n){Pr(t[n],e)})}}function Cr(t,e,n,r){if(t!==e){var o=Nr(t),i=Nr(e);if(o==Dr)if(i!=Dr||Object.keys(t).length<Object.keys(e).length)Ir(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Nr(i),u=Nr(a);if(s!=Tr&&s!=Dr)i!=e[o]&&Ir(r,(""==n?"":n+".")+o,i);else if(s==Tr)u!=Tr?Ir(r,(""==n?"":n+".")+o,i):i.length<a.length?Ir(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Cr(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Dr)if(u!=Dr||Object.keys(i).length<Object.keys(a).length)Ir(r,(""==n?"":n+".")+o,i);else for(var c in i)Cr(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Tr?i!=Tr?Ir(r,n,t):t.length<e.length?Ir(r,n,t):t.forEach(function(t,o){Cr(t,e[o],n+"["+o+"]",r)}):Ir(r,n,t)}}function Ir(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function qr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return Pn.find(function(e){return t._watcher===e})}function Br(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Qt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Ur(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Mr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Ur(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Er(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,qr(n)})):qr(this)}};function Vr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Vr),t.$options.render||(t.$options.render=Vr),"mp-toutiao"!==t.mpHost&&En(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,C,{before:function(){t._isMounted&&!t._isDestroyed&&En(t,"beforeUpdate")}},!0),n=!1,t}function Lr(t,e){return o(t)||o(e)?Hr(t,zr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Jr(t):u(t)?Wr(t):"string"===typeof t?t:""}function Jr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Kr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Gr(t){return Array.isArray(t)?P(t):"string"===typeof t?Kr(t):t}var Qr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Xr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Br(this,t)},Qr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=$e,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Xt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Xr(e||this,t)},t.prototype.__get_class=function(t,e){return Lr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Gr(t),r=e?E(e,n):n;return Object.keys(r).map(function(t){return S(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Yr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Yr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Yr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Yr}hr.prototype.__patch__=Mr,hr.prototype.$mount=function(t,e){return Fr(this,t,e)},to(hr),Zr(hr),e["default"]=hr}.call(this,n("c8ba"))},"6b26":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.add_video=e.add_pics=e.home_info=e.my_question_list=e.people_answer_lists=e.people_infos=e.user_people_list=e.user_add_follow=e.people_list=e.user_addfav=e.question_add=e.adopt_answer=e.answer_comment=e.answer_info=e.answer_lists=e.user_add_comment=e.user_add_answer=e.question_info=e.question_list=e.tag_add=e.get_tags=e.send_code=e.login=void 0;var r=n("55a5"),o=function(t){return r.http.post("/industry/api/login",t)};e.login=o;var i=function(t){return r.http.post("/industry/api/send_code",t)};e.send_code=i;var a=function(t){return r.http.post("/industry/api/get_tags",t)};e.get_tags=a;var s=function(t){return r.http.post("/industry/api/tag_add",t)};e.tag_add=s;var u=function(t){return r.http.post("/industry/api/question_list",t)};e.question_list=u;var c=function(t){return r.http.post("/industry/api/question_info",t)};e.question_info=c;var f=function(t){return r.http.post("/industry/api/user_add_answer",t)};e.user_add_answer=f;var l=function(t){return r.http.post("/industry/api/user_add_comment",t)};e.user_add_comment=l;var p=function(t){return r.http.post("/industry/api/answer_lists",t)};e.answer_lists=p;var d=function(t){return r.http.post("/industry/api/answer_info",t)};e.answer_info=d;var h=function(t){return r.http.post("/industry/api/answer_comment",t)};e.answer_comment=h;var v=function(t){return r.http.post("/industry/api/adopt_answer",t)};e.adopt_answer=v;var _=function(t){return r.http.post("/industry/api/question_add",t)};e.question_add=_;var y=function(t){return r.http.post("/industry/api/user_addfav",t)};e.user_addfav=y;var g=function(t){return r.http.post("/industry/api/people_list",t)};e.people_list=g;var m=function(t){return r.http.post("/industry/api/user_add_follow",t)};e.user_add_follow=m;var b=function(t){return r.http.post("/industry/api/user_people_list",t)};e.user_people_list=b;var w=function(t){return r.http.post("/industry/api/people_infos",t)};e.people_infos=w;var $=function(t){return r.http.post("/industry/api/people_answer_lists",t)};e.people_answer_lists=$;var O=function(t){return r.http.post("/industry/api/my_question_list",t)};e.my_question_list=O;var k=function(t){return r.http.post("/industry/api/home_info",t)};e.home_info=k;var A=function(t){return r.http.post("/industry/api/add_pics",t)};e.add_pics=A;var S=function(t){return r.http.post("/industry/api/add_video",t)};e.add_video=S},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=he,e.createComponent=ke,e.createPage=Oe,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return d(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var h=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function y(t){return"string"===typeof t}function g(t){return"[object Object]"===h.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],A={},S={};function j(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function T(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&_(e[n])&&(t[n]=j(t[n],e[n]))})}function E(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&_(e[n])&&T(t[n],e[n])})}function P(t,e){"string"===typeof t&&g(e)?D(S[t]||(S[t]={}),e):g(t)&&D(A,t)}function C(t,e){"string"===typeof t?g(e)?E(S[t],e):delete S[t]:g(t)&&E(A,t)}function I(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function q(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(I(o));else{var i=o(e);if(N(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){q(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function B(t,e){var n=[];Array.isArray(A.returnValue)&&n.push.apply(n,f(A.returnValue));var r=S[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function U(t){var e=Object.create(null);Object.keys(A).forEach(function(t){"returnValue"!==t&&(e[t]=A[t].slice())});var n=S[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function M(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=U(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=q(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(o))})}return e.apply(void 0,[R(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var V={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,L=/^create|Manager$/,H=/^on/;function z(t){return L.test(t)}function J(t){return F.test(t)}function W(t){return H.test(t)&&"onPush"!==t}function K(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function G(t){return!(z(t)||J(t)||W(t))}function Q(t,e){return G(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return _(n.success)||_(n.fail)||_(n.complete)?B(t,M.apply(void 0,[t,e,n].concat(o))):B(t,K(new Promise(function(r,i){M.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Z=750,Y=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Y="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&Y?.5:1:t<0?-n:n}var ot={promiseInterceptor:V},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:P,removeInterceptor:C}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var i=!0===o?e:{};for(var a in _(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];_(s)&&(s=s(e[a],e,i)),s?y(s)?i[s]=e[a]:g(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return _(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function dt(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;_(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return J(t)?pt(t,a,o.returnValue,z(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var ht=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(o),_(r)&&r(o)}}vt.forEach(function(t){ht[t]=_t(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(yt(),"$once",Array.prototype.slice.call(arguments))}function $t(){return gt(yt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:$t});function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;kt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function St(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}var jt=Object.freeze({getSubNVueById:St,requireNativePlugin:kt}),xt=Page,Tt=Component,Dt=/:/g,Et=w(function(t){return O(t.replace(Dt,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Et(n)].concat(o))}}}function Ct(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("created",t),Tt(t)};var It=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function qt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return qt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){qt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Bt(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ut(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Mt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Vt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Lt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Jt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Jt(t.props,!0)}))}),a}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Lt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var o=r["default"];_(o)&&(o=o()),r.type=zt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:o,observer:Lt(e)}}else{var i=zt(e,r);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:Lt(e)}}}),n}function Wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Kt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Gt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Kt(t,e)}),r}function Qt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Gt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Qt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",Yt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Wt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Yt;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!_(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Xt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Nt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Rt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function de(t){var e=le(t);return Rt(e,pe),e}function he(t){return App(de(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Bt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={multipleSlots:!0,addGlobalClass:!0},l={options:f,data:Vt(c,r.default.prototype),behaviors:Ht(c,ae),properties:Jt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Mt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Ut(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,u]}function _e(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Rt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}ge.push.apply(ge,It);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $e(t){var e=be(t);return Rt(e.methods,we),e}function Oe(t){return Component($e(t))}function ke(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ae={};Object.keys(it).forEach(function(t){Ae[t]=it[t]}),Object.keys(Ot).forEach(function(t){Ae[t]=Ot[t]}),Object.keys(jt).forEach(function(t){Ae[t]=Q(t,jt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Ae[t]=Q(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ae,t.UniEmitter=Ot),wx.createApp=he,wx.createPage=Oe,wx.createComponent=ke;var Se=Ae,je=Se;e.default=je}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"8acd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/login/login":{navigationBarTitleText:"登 录",scrollIndicator:"none",usingComponents:{}},"pages/index/index":{navigationBarTitleText:"首 页",titleNView:!1,scrollIndicator:"none"},"pages/ask/ask":{navigationBarTitleText:"问答",titleNView:!1,scrollIndicator:"none"},"pages/myQuestion/myQuestion":{navigationBarTitleText:"我的提问",scrollIndicator:"none"},"pages/questionToTalent/questionToTalent":{navigationBarTitleText:"向工控达人提问",scrollIndicator:"none"},"pages/question/question":{navigationBarTitleText:"提 问"},"pages/answerDetail/answerDetail":{navigationBarTitleText:" "},"pages/questionDetail/questionDetail":{navigationBarTitleText:" ",usingComponents:{}},"pages/myAnswer/myAnswer":{navigationBarTitleText:"我的回答"},"pages/setTag/setTag":{navigationBarTitleText:"标签设置",usingComponents:{}},"pages/my/my":{navigationBarTitleText:""},"pages/information/information":{navigationBarTitleText:"资料"}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"工控系统",navigationBarBackgroundColor:"#005CB7",backgroundColor:"#ffffff"}};e.default=r},"91f7":function(t,e,n){},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",h=1800,v=300,_=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},A=function(){return"n"===O()?plus.runtime.version:""},S=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",T="Last__Visit__Time",D=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=$(),t.setStorageSync(x,n),t.removeStorageSync(T)),n},E=function(){var e=t.getStorageSync(T),n=0;return n=e||"",t.setStorageSync(T,$()),n},P="__page__residence__time",C=0,I=0,N=function(){return C=$(),"n"===O()&&t.setStorageSync(P,$()),C},q=function(){return I=$(),"n"===O()&&(C=t.getStorageSync(P)),I-C},R="Total__Visit__Count",B=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},U=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},M=0,V=0,F=function(){var t=(new Date).getTime();return M=t,V=0,t},L=function(){var t=(new Date).getTime();return V=t,t},H=function(t){var e=0;if(0!==M&&(e=V-M),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>h;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},J=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},K=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},G=n("8acd").default,Q=n("b421").default||n("b421"),X=t.getSystemInfoSync(),Z=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:k(),ak:Q.appid,usv:l,v:A(),ch:S(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){L();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,L();var n=H();F();var r=J(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=J(this),e=z();if(this._navigationBarTitle.config=G&&G.pages[e]&&G.pages[e].titleNView&&G.pages[e].titleNView.titleText||G&&G.pages[e]&&G.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);L(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){L();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=$(),this.statData.sc=j(t.scene),this.statData.fvts=D(),this.statData.lvts=E(),this.statData.tvc=B(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Q.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=$(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(q()<_)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var u=[],c=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var d in s)p(d);u.push.apply(u,c.concat(f));var h={usv:l,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(h):setTimeout(function(){r._sendRequest(h)},200):this.imageRequest(h)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(U(t)).options;e.src=d+"?"+n}},{key:"sendEvent",value:function(t,e){K(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Y=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Y.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},b421:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__30FDDE1"};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d710:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.requesrUrl=void 0;var r="http://test.api.lanchonggk.com";e.requesrUrl=r}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-collapse-item/uni-collapse-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse-item/uni-collapse-item.js';

define('components/uni-collapse-item/uni-collapse-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse-item/uni-collapse-item"], {
  "1ce5": function ce5(n, e, t) {
    "use strict";

    t.r(e);
    var i = t("3394"),
        s = t.n(i);

    for (var l in i) {
      "default" !== l && function (n) {
        t.d(e, n, function () {
          return i[n];
        });
      }(l);
    }

    e["default"] = s.a;
  },
  3394: function _(n, e, t) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var i = function i() {
      return t.e("components/uni-icons/uni-icons").then(t.bind(null, "51ff"));
    },
        s = {
      name: "UniCollapseItem",
      components: {
        uniIcons: i
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        name: {
          type: [Number, String],
          default: 0
        },
        disabled: {
          type: [Boolean, String],
          default: !1
        },
        showAnimation: {
          type: Boolean,
          default: !1
        },
        open: {
          type: [Boolean, String],
          default: !1
        },
        thumb: {
          type: String,
          default: ""
        }
      },
      data: function data() {
        return {
          isOpen: !1
        };
      },
      watch: {
        open: function open(n) {
          this.isOpen = n;
        }
      },
      inject: ["collapse"],
      created: function created() {
        if (this.isOpen = this.open, this.nameSync = this.name ? this.name : this.collapse.childrens.length, this.collapse.childrens.push(this), "true" === String(this.collapse.accordion) && this.isOpen) {
          var n = this.collapse.childrens[this.collapse.childrens.length - 2];
          n && (this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = !1);
        }
      },
      methods: {
        onClick: function onClick() {
          var n = this;
          this.disabled || ("true" === String(this.collapse.accordion) && this.collapse.childrens.forEach(function (e) {
            e !== n && (e.isOpen = !1);
          }), this.isOpen = !this.isOpen, this.collapse.onChange && this.collapse.onChange(), this.$forceUpdate());
        }
      }
    };

    e.default = s;
  },
  "589d": function d(n, e, t) {
    "use strict";

    var i = function i() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        s = [];

    t.d(e, "a", function () {
      return i;
    }), t.d(e, "b", function () {
      return s;
    });
  },
  a78b: function a78b(n, e, t) {
    "use strict";

    t.r(e);
    var i = t("589d"),
        s = t("1ce5");

    for (var l in s) {
      "default" !== l && function (n) {
        t.d(e, n, function () {
          return s[n];
        });
      }(l);
    }

    t("f560");
    var o = t("2877"),
        a = Object(o["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = a.exports;
  },
  b4d9: function b4d9(n, e, t) {},
  f560: function f560(n, e, t) {
    "use strict";

    var i = t("b4d9"),
        s = t.n(i);
    s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse-item/uni-collapse-item-create-component', {
  'components/uni-collapse-item/uni-collapse-item-create-component': function componentsUniCollapseItemUniCollapseItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a78b"));
  }
}, [['components/uni-collapse-item/uni-collapse-item-create-component']]]);
});
require('components/uni-collapse-item/uni-collapse-item.js');
__wxRoute = 'components/uni-collapse/uni-collapse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse/uni-collapse.js';

define('components/uni-collapse/uni-collapse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse/uni-collapse"], {
  "029d": function d(n, t, e) {
    "use strict";

    var u = e("3fbf"),
        a = e.n(u);
    a.a;
  },
  "3fbf": function fbf(n, t, e) {},
  "4f7e": function f7e(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("5f72"),
        a = e("f769");

    for (var o in a) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(o);
    }

    e("029d");
    var r = e("2877"),
        f = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  "5f72": function f72(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  "844f": function f(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniCollapse",
      props: {
        accordion: {
          type: [Boolean, String],
          default: !1
        }
      },
      data: function data() {
        return {};
      },
      provide: function provide() {
        return {
          collapse: this
        };
      },
      created: function created() {
        this.childrens = [];
      },
      methods: {
        onChange: function onChange() {
          var n = [];
          this.childrens.forEach(function (t, e) {
            t.isOpen && n.push(t.nameSync);
          }), this.$emit("change", n);
        }
      }
    };
    t.default = u;
  },
  f769: function f769(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("844f"),
        a = e.n(u);

    for (var o in u) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse/uni-collapse-create-component', {
  'components/uni-collapse/uni-collapse-create-component': function componentsUniCollapseUniCollapseCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4f7e"));
  }
}, [['components/uni-collapse/uni-collapse-create-component']]]);
});
require('components/uni-collapse/uni-collapse.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  "2fe0": function fe0(n, t, e) {},
  3066: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  "43df": function df(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("3066"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = i.a;
  },
  "51ff": function ff(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("99ba"),
        i = e("43df");

    for (var r in i) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(r);
    }

    e("cb6d");
    var c = e("2877"),
        f = Object(c["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  "99ba": function ba(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return i;
    });
  },
  cb6d: function cb6d(n, t, e) {
    "use strict";

    var u = e("2fe0"),
        i = e.n(u);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("51ff"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "0a5b": function a5b(t, n, e) {
    "use strict";

    var o = e("8d85"),
        u = e.n(o);
    u.a;
  },
  6282: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("fe1a"),
        u = e("6cac");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("0a5b");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "648e": function e(t, n, _e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  "6cac": function cac(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("648e"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  "8d85": function d85(t, n, e) {},
  fe1a: function fe1a(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6282"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/uni-tag/uni-tag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-tag/uni-tag.js';

define('components/uni-tag/uni-tag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-tag/uni-tag"], {
  "0773": function _(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("8e3b"),
        u = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  3213: function _(t, e, n) {
    "use strict";

    var a = n("93c1"),
        u = n.n(a);
    u.a;
  },
  "8dc0": function dc0(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("f23a"),
        u = n("0773");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("3213");
    var r = n("2877"),
        l = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  "8e3b": function e3b(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "UniTag",
      props: {
        type: {
          type: String,
          default: "default"
        },
        size: {
          type: String,
          default: "normal"
        },
        text: {
          type: String,
          default: ""
        },
        disabled: {
          type: [String, Boolean],
          defalut: !1
        },
        inverted: {
          type: [String, Boolean],
          defalut: !1
        },
        circle: {
          type: [String, Boolean],
          defalut: !1
        },
        mark: {
          type: [String, Boolean],
          defalut: !1
        }
      },
      methods: {
        onClick: function onClick() {
          !0 !== this.disabled && "true" !== this.disabled && this.$emit("click");
        }
      }
    };
    e.default = a;
  },
  "93c1": function c1(t, e, n) {},
  f23a: function f23a(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-tag/uni-tag-create-component', {
  'components/uni-tag/uni-tag-create-component': function componentsUniTagUniTagCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8dc0"));
  }
}, [['components/uni-tag/uni-tag-create-component']]]);
});
require('components/uni-tag/uni-tag.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"32e7":function(t,n,e){"use strict";(function(t){e("91f7"),e("921b");o(e("66fd"));var n=o(e("828f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"5c6e":function(t,n,e){"use strict";e.r(n);var o=e("725b"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"688a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"725b":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("6b26"),i={data:function(){return{phoneNum:"",verty:"",isCountdown:!1,count:"",timer:null}},onLoad:function(){},methods:{getCode:function(){var n=this;console.log(t("倒计时"," at pages\\login\\login.vue:41"));var e=60;this.sendCode(),this.timer||(this.count=e,this.isCountdown=!0,this.timer=setInterval(function(){n.count>0&&n.count<=e?n.count--:(n.isCountdown=!1,clearInterval(n.timer),n.timer=null)},1e3))},toLogin:function(){return this.phoneNum?this.verty?(console.log(t("login"," at pages\\login\\login.vue:76")),void(0,a.login)({mobile:this.phoneNum,sms_code:this.verty}).then(function(n){console.log(t(n," at pages\\login\\login.vue:81")),1==n.data.code&&(console.log(t(n.data.data.access_token," at pages\\login\\login.vue:83")),console.log(t(n.data.data.id," at pages\\login\\login.vue:84")),o.setStorage({key:"access_token",data:n.data.data.access_token,success:function(){o.setStorage({key:"member_id",data:n.data.data.id,success:function(){n.data.data.tags?o.switchTab({url:"../index/index"}):o.navigateTo({url:"../setTag/setTag"})}})}}))})):(o.showToast({title:"请输入验证码!",duration:2e3,icon:"none"}),!1):(o.showToast({title:"请输入手机号码!",duration:2e3,icon:"none"}),!1)},sendCode:function(){var n=this;if(!this.phoneNum)return o.showToast({title:"请先输入手机号码!",duration:2e3,icon:"none"}),!1;console.log(t("进入接口"," at pages\\login\\login.vue:121")),(0,a.send_code)({mobile:this.phoneNum,type:1}).then(function(e){console.log(t(e," at pages\\login\\login.vue:126")),1==e.data.code?o.showToast({title:"短信发送成功!",duration:2e3,icon:"none"}):(o.showToast({title:"短信发送失败，请重试!",duration:2e3,icon:"none"}),n.isCountdown=!1)})}}};n.default=i}).call(this,e("0de9")["default"],e("6e42")["default"])},"828f":function(t,n,e){"use strict";e.r(n);var o=e("688a"),a=e("5c6e");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var u=e("2877"),s=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports}},[["32e7","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"245c":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("6b26"),i={data:function(){return{access_token:"",member_id:"",searchContent:"",tabCurrentIndex:1,questionList:[],peopleList:[],navList:[{state:0,text:"新闻"},{state:1,text:"热门问答"},{state:2,text:"热门资料"},{state:3,text:"达人"}],labels:[{label:"自动化"},{label:"仪器控"}]}},onLoad:function(){var t=this;e.getStorage({key:"access_token",success:function(e){t.access_token=e.data}}),e.getStorage({key:"member_id",success:function(e){t.member_id=e.data}}),console.log(a(t.member_id," at pages\\index\\index.vue:176")),console.log(a(t.access_token," at pages\\index\\index.vue:177")),t.getHotQuestion()},methods:{tabClick:function(e){var t=this;this.tabCurrentIndex=e,3==this.tabCurrentIndex?t.getPeopleList():1==this.tabCurrentIndex&&t.getHotQuestion()},toQuestionDetail:function(t){e.navigateTo({url:"../questionDetail/questionDetail?id="+t})},getHotQuestion:function(){var e=this;(0,o.question_list)({member_id:e.member_id,access_token:e.access_token,type:3,seartag:"",reward:2,page:1,limit:10}).then(function(t){console.log(a(t," at pages\\index\\index.vue:209")),1==t.data.code&&(e.questionList=t.data.data.list)})},getPeopleList:function(){var e=this;(0,o.people_list)({member_id:e.member_id,access_token:e.access_token,page:1,limit:10}).then(function(t){console.log(a(t," at pages\\index\\index.vue:224")),1==t.data.code&&(e.peopleList=t.data.data.list)})},focusPeople:function(t,n){var i=this;(0,o.user_add_follow)({member_id:i.member_id,access_token:i.access_token,to_member_id:t}).then(function(t){var o;console.log(a(t," at pages\\index\\index.vue:238")),1==t.data.code?(1==n?o="关注达人成功!":2==n&&(o="取消成功!"),e.showToast({title:o,duration:2e3,icon:"none"}),i.getPeopleList()):e.showToast({title:t.data.msg,duration:2e3,icon:"none"})})}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"24e4":function(e,t,n){"use strict";(function(e){n("91f7"),n("921b");a(n("66fd"));var t=a(n("3284"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},3284:function(e,t,n){"use strict";n.r(t);var a=n("5070"),o=n("4cf3");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var s=n("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"4cf3":function(e,t,n){"use strict";n.r(t);var a=n("245c"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},5070:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})}},[["24e4","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/ask/ask';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ask/ask.js';

define('pages/ask/ask.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ask/ask"],{"312d":function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return a})},"41ac":function(t,e,n){"use strict";(function(t,c){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("6b26"),i=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"6282"))},s=function(){return n.e("components/uni-collapse/uni-collapse").then(n.bind(null,"4f7e"))},o=function(){return n.e("components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"a78b"))},u={components:{uniPopup:i,uniCollapse:s,uniCollapseItem:o},data:function(){return{type:1,searchContent:"",tabCurrentIndex:0,questionList:[],tagList:[],tags:"",checkedList:[],navList:[{state:0,text:"推荐"},{state:1,text:"最新"},{state:2,text:"热门"},{state:3,text:"冷门"}]}},onLoad:function(){var e=this;t.getStorage({key:"access_token",success:function(t){e.access_token=t.data}}),t.getStorage({key:"member_id",success:function(t){e.member_id=t.data}}),console.log(c(e.member_id," at pages\\ask\\ask.vue:128")),console.log(c(e.access_token," at pages\\ask\\ask.vue:129")),e.getHotQuestion(),e.getTags()},methods:{tabClick:function(t){var e=this;this.tabCurrentIndex=t,0==t?e.type=1:1==t?e.type=2:2==t?e.type=3:2==t&&(e.type=4),e.tags="",e.getHotQuestion()},toDetail:function(e){t.navigateTo({url:"../questionDetail/questionDetail?id="+e})},getTags:function(){var t=this;(0,a.get_tags)({member_id:t.member_id,access_token:t.access_token}).then(function(e){console.log(c(e," at pages\\ask\\ask.vue:163")),1==e.data.code&&(t.tagList=e.data.data.list,console.log(c(t.tagList," at pages\\ask\\ask.vue:166")),t.tagList.forEach(function(t,e){t.child.forEach(function(t,e){t.is_checked=0})}))})},checkTag:function(t,e){var n=this;n.checkedList=[],n.tagList[t].child[e].is_checked=1,n.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&(n.tags+=t.id+",",n.checkedList.push(t))})})},cancelTag:function(t,e){var n=this;n.tagList[t].child[e].is_checked=0,n.checkedList=[],n.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&(n.tags+=t.id+",",n.checkedList.push(t))})})},deleteTag:function(t,e){var n=this;n.checkedList.splice(e,1),n.tagList.forEach(function(e,n){e.child.forEach(function(e,n){e.id==t.id&&(e.is_checked=0)})})},sure_tag:function(){var t=this;t.checkedList=[],t.tags="",t.tagList.forEach(function(e,n){e.child.forEach(function(e,n){1==e.is_checked&&(t.tags+=e.id+",")})}),t.tags=t.tags.substr(0,t.tags.length-1),t.$refs.popup.close(),t.getHotQuestion()},reset_tag:function(){var t=this;t.checkedList=[],t.tagList.forEach(function(t,e){t.child.forEach(function(t,e){t.is_checked=0})})},getHotQuestion:function(){var t=this;t.questionList=[],(0,a.question_list)({member_id:t.member_id,access_token:t.access_token,type:t.type,seartag:t.tags,reward:2,page:1,limit:10}).then(function(e){console.log(c(e," at pages\\ask\\ask.vue:257")),1==e.data.code&&(t.questionList=e.data.data.list,t.tagList.forEach(function(t,e){t.child.forEach(function(t,e){t.is_checked=0})}))})},openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"627e":function(t,e,n){"use strict";(function(t){n("91f7"),n("921b");c(n("66fd"));var e=c(n("f326"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6ff5":function(t,e,n){"use strict";n.r(e);var c=n("41ac"),a=n.n(c);for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);e["default"]=a.a},f326:function(t,e,n){"use strict";n.r(e);var c=n("312d"),a=n("6ff5");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var s=n("2877"),o=Object(s["a"])(a["default"],c["a"],c["b"],!1,null,null,null);e["default"]=o.exports}},[["627e","common/runtime","common/vendor"]]]);
});
require('pages/ask/ask.js');
__wxRoute = 'pages/myQuestion/myQuestion';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myQuestion/myQuestion.js';

define('pages/myQuestion/myQuestion.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myQuestion/myQuestion"],{"2af9":function(t,e,n){"use strict";(function(t){n("91f7"),n("921b");a(n("66fd"));var e=a(n("ad0c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4047:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("6b26"),o={data:function(){return{access_token:"",member_id:"",tabCurrentIndex:0,type:1,navList:[{state:0,text:"指定提问"},{state:1,text:"普通提问"}],questionList:[]}},onLoad:function(){var e=this;t.getStorage({key:"access_token",success:function(t){e.access_token=t.data}}),t.getStorage({key:"member_id",success:function(t){e.member_id=t.data}}),console.log(a(e.member_id," at pages\\myQuestion\\myQuestion.vue:79")),console.log(a(e.access_token," at pages\\myQuestion\\myQuestion.vue:80")),e.getMyQuestion(e.type)},methods:{tabClick:function(t){var e=this;e.tabCurrentIndex=t,0==t?e.type=1:1==t&&(e.type=2),e.getMyQuestion(e.type)},getMyQuestion:function(t){var e=this;(0,u.my_question_list)({member_id:e.member_id,access_token:e.access_token,type:t}).then(function(t){console.log(a(t," at pages\\myQuestion\\myQuestion.vue:103")),1==t.data.code&&(e.questionList=t.data.data.list)})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"6e6c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},ad0c:function(t,e,n){"use strict";n.r(e);var a=n("6e6c"),u=n("b016");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("b9b8");var s=n("2877"),i=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},b016:function(t,e,n){"use strict";n.r(e);var a=n("4047"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},b7a5:function(t,e,n){},b9b8:function(t,e,n){"use strict";var a=n("b7a5"),u=n.n(a);u.a}},[["2af9","common/runtime","common/vendor"]]]);
});
require('pages/myQuestion/myQuestion.js');
__wxRoute = 'pages/questionToTalent/questionToTalent';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/questionToTalent/questionToTalent.js';

define('pages/questionToTalent/questionToTalent.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/questionToTalent/questionToTalent"],{4900:function(e,t,o){"use strict";o.r(t);var n=o("fbac"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},7657:function(e,t,o){"use strict";(function(e){o("91f7"),o("921b");n(o("66fd"));var t=n(o("aed2"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},aed2:function(e,t,o){"use strict";o.r(t);var n=o("d788"),a=o("4900");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);var s=o("2877"),u=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},d788:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},fbac:function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("6b26"),i=function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"6282"))},s={components:{uniPopup:i},data:function(){return{question:"",to_member_id:"",question_content:"",imgList:[],peopleDetail:{},checkedList:[],tagList:[],tags:"",moneyTab:0,moneyNum:5,totalMoeny:0,moneyList:[{label:"5",value:5},{label:"10",value:10},{label:"20",value:20},{label:"50",value:50}],videoSrc:""}},onLoad:function(t){var o=this;o.to_member_id=24,e.getStorage({key:"access_token",success:function(e){o.access_token=e.data}}),e.getStorage({key:"member_id",success:function(e){o.member_id=e.data}}),console.log(n(o.access_token," at pages\\questionToTalent\\questionToTalent.vue:145")),console.log(n(o.member_id," at pages\\questionToTalent\\questionToTalent.vue:146")),o.getPeopleDetail(),o.getMoney()},methods:{getPeopleDetail:function(){var e=this;(0,a.people_infos)({member_id:this.member_id,access_token:this.access_token,to_member_id:e.to_member_id}).then(function(t){console.log(n(t," at pages\\questionToTalent\\questionToTalent.vue:159")),1==t.data.code&&(e.peopleDetail=t.data.data)})},getMoney:function(){var e=this;(0,a.home_info)({member_id:e.member_id,access_token:e.access_token}).then(function(t){console.log(n(t," at pages\\questionToTalent\\questionToTalent.vue:172")),1==t.data.code&&(e.totalMoeny=t.data.data.balance)})},focusPeople:function(t){var o=this;(0,a.user_add_follow)({member_id:o.member_id,access_token:o.access_token,to_member_id:o.to_member_id}).then(function(a){var i;console.log(n(a," at pages\\questionToTalent\\questionToTalent.vue:186")),1==a.data.code?(1==t?i="关注达人成功!":2==t&&(i="取消成功!"),e.showToast({title:i,duration:2e3,icon:"none"}),o.getPeopleDetail()):e.showToast({title:a.data.msg,duration:2e3,icon:"none"})})},selectMoney:function(e){this.moneyTab=e,this.moneyNum=this.moneyList[e].value},inputMoney:function(){this.moneyTab=-1},openPopup:function(){console.log(n("ffffff"," at pages\\questionToTalent\\questionToTalent.vue:220")),console.log(n(this.$refs.popup," at pages\\questionToTalent\\questionToTalent.vue:221")),this.$refs.popup.open(),this.getTags()},closePopup:function(){this.$refs.popup.close()},getTags:function(){var e=this;(0,a.get_tags)({member_id:this.member_id,access_token:this.access_token}).then(function(t){console.log(n(t," at pages\\questionToTalent\\questionToTalent.vue:236")),1==t.data.code&&(e.tagList=t.data.data.list,console.log(n(e.tagList," at pages\\questionToTalent\\questionToTalent.vue:239")),e.tagList.forEach(function(e,t){e.child.forEach(function(e,t){e.is_checked=0})}))})},checkTag:function(e,t){var o=this;o.tagList[e].child[t].is_checked=1},cancelTag:function(e,t){var o=this;o.tagList[e].child[t].is_checked=0},sure_tag:function(){var e=this;e.checkedList=[],e.tagList.forEach(function(t,o){t.child.forEach(function(t,o){1==t.is_checked&&(e.tags+=t.id+",",e.checkedList.push(t.tag_title))})}),e.tags=e.tags.substr(0,e.tags.length-1),e.$refs.popup.close()},reset_tag:function(){var e=this;e.checkedList=[],e.tagList.forEach(function(e,t){e.child.forEach(function(e,t){e.is_checked=0})})},uploadImg:function(){var t=this;e.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(n(e," at pages\\questionToTalent\\questionToTalent.vue:293")),0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths,console.log(n(t.imgList," at pages\\questionToTalent\\questionToTalent.vue:299"))}})},uploadVideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){console.log(n(e," at pages\\questionToTalent\\questionToTalent.vue:331")),t.videoSrc=e.tempFilePath}})},submitBtn:function(){var t=this;(0,a.question_add)({member_id:t.member_id,access_token:t.access_token,to_member_id:t.to_member_id,title:t.question,content:t.question_content,price:t.moneyNum,tag_id:t.tags}).then(function(o){console.log(n(o," at pages\\questionToTalent\\questionToTalent.vue:348")),console.log(n(o.data.data," at pages\\questionToTalent\\questionToTalent.vue:349"));var a=o.data.data;if(t.imgList.length>0){var i=t.imgList.map(function(e,t){return{name:"image"+t,uri:e}});console.log(n(i," at pages\\questionToTalent\\questionToTalent.vue:359")),e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_pics",fileType:"image",files:i,filePath:o.tempFilePaths[0],name:"pic[]",formData:{post_id:a,type:"1"},success:function(o){console.log(n(o," at pages\\questionToTalent\\questionToTalent.vue:371")),200==o.statusCode&&(t.videoSrc?e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_video",filePath:t.videoSrc,fileType:"video",name:"video",formData:{post_id:a,type:"1"},success:function(t){console.log(n(t," at pages\\questionToTalent\\questionToTalent.vue:385")),200==t.statusCode&&(e.showToast({title:"问题发布成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../questionDetail/questionDetail?id="+a}))}}):(e.showToast({title:"问题发布成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../questionDetail/questionDetail?id="+a})))},fail:function(e){console.log(n(e," at pages\\questionToTalent\\questionToTalent.vue:414"))}})}})}}};t.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["7657","common/runtime","common/vendor"]]]);
});
require('pages/questionToTalent/questionToTalent.js');
__wxRoute = 'pages/question/question';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/question/question.js';

define('pages/question/question.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/question/question"],{"0f88":function(e,t,n){"use strict";n.r(t);var o=n("1859"),i=n("46f2");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},"11c0":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("6b26"),s=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"6282"))},a=function(){return n.e("components/uni-tag/uni-tag").then(n.bind(null,"8dc0"))},u={components:{uniPopup:s,uniTag:a},data:function(){return{access_token:"",member_id:"",tagList:[],question:"",question_content:"",imgList:[],checkedList:[],tags:"",moneyList:[{label:"5",value:5},{label:"10",value:10},{label:"20",value:20},{label:"50",value:50}],moneyTab:0,moneyNum:5,videoSrc:"",totalMoeny:0,iscanPublish:!0}},onLoad:function(){var t=this;e.getStorage({key:"access_token",success:function(e){t.access_token=e.data}}),e.getStorage({key:"member_id",success:function(e){t.member_id=e.data}}),console.log(o(t.access_token," at pages\\question\\question.vue:132")),console.log(o(t.member_id," at pages\\question\\question.vue:133")),t.access_token&&t.member_id&&t.getMoney()},methods:{openPopup:function(){this.$refs.popup.open(),this.getTags()},closePopup:function(){this.$refs.popup.close()},selectMoney:function(e){this.moneyTab=e,this.moneyNum=this.moneyList[e].value},inputMoney:function(){this.moneyTab=-1},getMoney:function(){var e=this;(0,i.home_info)({member_id:e.member_id,access_token:e.access_token}).then(function(t){console.log(o(t," at pages\\question\\question.vue:164")),1==t.data.code&&(e.totalMoeny=t.data.data.balance)})},getTags:function(){var e=this;(0,i.get_tags)({member_id:this.member_id,access_token:this.access_token}).then(function(t){console.log(o(t," at pages\\question\\question.vue:177")),1==t.data.code&&(e.tagList=t.data.data.list,console.log(o(e.tagList," at pages\\question\\question.vue:180")),e.tagList.forEach(function(e,t){e.child.forEach(function(e,t){e.is_checked=0})}))})},checkTag:function(e,t){var n=this;n.tagList[e].child[t].is_checked=1},cancelTag:function(e,t){var n=this;n.tagList[e].child[t].is_checked=0},sure_tag:function(){var e=this;e.checkedList=[],e.tagList.forEach(function(t,n){t.child.forEach(function(t,n){1==t.is_checked&&(e.tags+=t.id+",",e.checkedList.push(t.tag_title))})}),e.tags=e.tags.substr(0,e.tags.length-1),e.$refs.popup.close()},reset_tag:function(){var e=this;e.checkedList=[],e.tagList.forEach(function(e,t){e.child.forEach(function(e,t){e.is_checked=0})})},uploadImg:function(){var t=this;e.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(o(e," at pages\\question\\question.vue:234")),0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths,console.log(o(t.imgList," at pages\\question\\question.vue:240"))}})},uploadVideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){console.log(o(e," at pages\\question\\question.vue:251")),t.videoSrc=e.tempFilePath}})},submitBtn:function(){var t=this;t.iscanPublish=!1,(0,i.question_add)({member_id:t.member_id,access_token:t.access_token,to_member_id:"",title:t.question,content:t.question_content,price:t.moneyNum,tag_id:t.tags}).then(function(n){console.log(o(n," at pages\\question\\question.vue:269")),console.log(o(n.data.data," at pages\\question\\question.vue:270"));var i=n.data.data;if(0==t.imgList.length&&""==t.videoSrc&&(console.log(o("没有视频和图片"," at pages\\question\\question.vue:274")),e.showToast({title:"发布成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../questionDetail/questionDetail?id="+i})),t.imgList.length>0){var s=t.imgList.map(function(e,t){return{name:"image"+t,uri:e}});console.log(o(s," at pages\\question\\question.vue:293")),e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_pics",fileType:"image",files:s,formData:{post_id:i,type:"1"},success:function(n){console.log(o(n," at pages\\question\\question.vue:303")),200==n.statusCode&&(t.videoSrc?e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_video",filePath:t.videoSrc,fileType:"video",name:"video",formData:{post_id:i,type:"1"},success:function(t){console.log(o(t," at pages\\question\\question.vue:317")),200==t.statusCode&&(e.showToast({title:"问题发布成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../questionDetail/questionDetail?id="+i}))}}):(e.showToast({title:"问题发布成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../questionDetail/questionDetail?id="+i})))},fail:function(e){console.log(o(e," at pages\\question\\question.vue:346"))}})}})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},1859:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"46f2":function(e,t,n){"use strict";n.r(t);var o=n("11c0"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=i.a},"4ecc":function(e,t,n){"use strict";(function(e){n("91f7"),n("921b");o(n("66fd"));var t=o(n("0f88"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["4ecc","common/runtime","common/vendor"]]]);
});
require('pages/question/question.js');
__wxRoute = 'pages/answerDetail/answerDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/answerDetail/answerDetail.js';

define('pages/answerDetail/answerDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/answerDetail/answerDetail"],{"066c":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("6b26"),s={data:function(){return{question_id:"",answer_id:"",access_token:"",member_id:"",isOpen:!1,isComment:!1,commentText:"",isAddAnswer:!1,answerText:"",imgList:[],videoSrc:"",questionDetail:{},answerDetail:{},tags:[],isSeeImg:!1,iscanPublish:!0}},onLoad:function(t){var a=this;a.answer_id=t.id,e.getStorage({key:"access_token",success:function(e){a.access_token=e.data}}),e.getStorage({key:"member_id",success:function(e){a.member_id=e.data}}),console.log(n(a.member_id," at pages\\answerDetail\\answerDetail.vue:181")),console.log(n(a.access_token," at pages\\answerDetail\\answerDetail.vue:182")),a.getAnswerDetail(),a.getcommentList()},methods:{seeImg:function(){this.isSeeImg=!0},notSeeImg:function(){this.isSeeImg=!1},submitComment:function(){var t=this;(0,i.user_add_comment)({member_id:t.member_id,access_token:t.access_token,answer_id:t.answer_id,to_comment_id:"",content:t.commentText}).then(function(a){console.log(n(a," at pages\\answerDetail\\answerDetail.vue:205")),1==a.data.code&&(e.showToast({title:"发布评论成功!",duration:2e3,icon:"none"}),t.commentText="",t.isComment=!1,t.getcommentList())})},getcommentList:function(){var e=this;(0,i.answer_comment)({answer_id:e.answer_id,page:1,limit:10}).then(function(t){console.log(n(t," at pages\\answerDetail\\answerDetail.vue:226")),1==t.data.code&&(e.commentList=t.data.data.list)})},uploadImg:function(){var t=this;e.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(n(e," at pages\\answerDetail\\answerDetail.vue:240")),0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths}})},uploadVideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){console.log(n(e," at pages\\answerDetail\\answerDetail.vue:256")),t.videoSrc=e.tempFilePath}})},submitAnswer:function(){var t=this;t.iscanPublish=!1,(0,i.user_add_answer)({member_id:t.member_id,access_token:t.access_token,content:t.answerText,question_id:t.question_id}).then(function(a){if(console.log(n(a," at pages\\answerDetail\\answerDetail.vue:271")),1!=a.data.code)return e.showToast({title:a.data.msg,duration:2e3,icon:"none"}),!1;var i=a.data.data;if(0==t.imgList.length&&""==t.videoSrc&&(console.log(n("没有视频和图片"," at pages\\answerDetail\\answerDetail.vue:276")),e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+i})),t.imgList.length>0){var s=t.imgList.map(function(e,t){return{name:"image"+t,uri:e}});console.log(n(s," at pages\\answerDetail\\answerDetail.vue:295")),e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_pics",fileType:"image",files:s,formData:{post_id:i,type:"2"},success:function(a){console.log(n(a," at pages\\answerDetail\\answerDetail.vue:305")),200==a.statusCode&&(t.videoSrc?e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_video",filePath:t.videoSrc,fileType:"video",name:"video",formData:{post_id:i,type:"2"},success:function(t){console.log(n(t," at pages\\answerDetail\\answerDetail.vue:319")),200==t.statusCode&&(e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+i}))},fail:function(e){console.log(n(e," at pages\\answerDetail\\answerDetail.vue:333"))}}):(e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+i})))},fail:function(e){console.log(n(e," at pages\\answerDetail\\answerDetail.vue:350"))}})}})},toAddAnswer:function(){var e=this;e.isAddAnswer=!0},toComment:function(){this.isComment=!0},getAnswerDetail:function(){var e=this;(0,i.answer_info)({answer_id:parseInt(e.answer_id)}).then(function(t){console.log(n(t," at pages\\answerDetail\\answerDetail.vue:379")),1==t.data.code&&(e.answerDetail=t.data.data,e.question_id=t.data.data.question_id,(0,i.question_info)({member_id:e.member_id,access_token:e.access_token,question_id:e.question_id}).then(function(t){console.log(n(t," at pages\\answerDetail\\answerDetail.vue:388")),1==t.data.code&&(e.questionDetail=t.data.data,e.tags=t.data.data.tag_title.split(","))}))})}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"21c1":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.isComment=!1},e.e1=function(t){e.isAddAnswer=!1})},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"423b":function(e,t,a){"use strict";(function(e){a("91f7"),a("921b");n(a("66fd"));var t=n(a("87ab"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"87ab":function(e,t,a){"use strict";a.r(t);var n=a("21c1"),i=a("c4d3");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},c4d3:function(e,t,a){"use strict";a.r(t);var n=a("066c"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a}},[["423b","common/runtime","common/vendor"]]]);
});
require('pages/answerDetail/answerDetail.js');
__wxRoute = 'pages/questionDetail/questionDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/questionDetail/questionDetail.js';

define('pages/questionDetail/questionDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/questionDetail/questionDetail"],{"0b0e":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("6b26"),o={data:function(){return{question_id:"",access_token:"",member_id:"",isOpen:!1,isComment:!1,commentText:"",isAddAnswer:!1,answerText:"",imgList:[],videoSrc:"",questionDetail:{},tags:[],isSeeImg:!1,answerList:[],iscanPublish:!0}},onLoad:function(t){var i=this;i.question_id=t.id,e.getStorage({key:"access_token",success:function(e){i.access_token=e.data}}),e.getStorage({key:"member_id",success:function(e){i.member_id=e.data}}),console.log(n(i.member_id," at pages\\questionDetail\\questionDetail.vue:145")),console.log(n(i.access_token," at pages\\questionDetail\\questionDetail.vue:146")),i.getQuestionDetail(),i.getAnswerList()},methods:{seeImg:function(){this.isSeeImg=!0},notSeeImg:function(){this.isSeeImg=!1},getAnswerList:function(){console.log(n("进入"," at pages\\questionDetail\\questionDetail.vue:161"));var e=this;(0,a.answer_lists)({question_id:e.question_id,page:1,limit:10}).then(function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:168")),1==t.data.code&&(e.answerList=t.data.data.list)})},adobtAnswer:function(t){var i=this;adopt_answer({member_id:i.member_id,access_token:i.access_token,answer_id:t}).then(function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:182")),1==t.data.code&&(e.showToast({title:"采纳成功!",duration:2e3,icon:"none"}),i.getAnswerList())})},toAnswer:function(t){e.navigateTo({url:"../answerDetail/answerDetail?id="+t})},uploadImg:function(){var t=this;e.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:208")),0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths,console.log(n(t.imgList," at pages\\questionDetail\\questionDetail.vue:214"))}})},uploadVideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:225")),t.videoSrc=e.tempFilePath}})},submitAnswer:function(){var t=this;t.iscanPublish=!1,(0,a.user_add_answer)({member_id:t.member_id,access_token:t.access_token,content:t.answerText,question_id:t.question_id}).then(function(i){if(console.log(n(i," at pages\\questionDetail\\questionDetail.vue:240")),1!=i.data.code)return e.showToast({title:i.data.msg,duration:2e3,icon:"none"}),!1;var a=i.data.data;if(0==t.imgList.length&&""==t.videoSrc&&(console.log(n("没有视频和图片"," at pages\\questionDetail\\questionDetail.vue:245")),e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+a})),t.imgList.length>0){var o=t.imgList.map(function(e,t){return{name:"image"+t,uri:e}});console.log(n(o," at pages\\questionDetail\\questionDetail.vue:264")),e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_pics",fileType:"image",files:o,formData:{post_id:a,type:"2"},success:function(i){console.log(n(i," at pages\\questionDetail\\questionDetail.vue:274")),200==i.statusCode&&(t.videoSrc?e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_video",filePath:t.videoSrc,fileType:"video",name:"video",formData:{post_id:a,type:"2"},success:function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:288")),200==t.statusCode&&(e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+a}))},fail:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:302"))}}):(e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+a})))},fail:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:320"))}})}})},toAddAnswer:function(){var e=this;e.isAddAnswer=!0},getQuestionDetail:function(){var e=this;(0,a.question_info)({member_id:e.member_id,access_token:e.access_token,question_id:e.question_id}).then(function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:348")),1==t.data.code&&(e.questionDetail=t.data.data,e.tags=t.data.data.tag_title.split(","),console.log(n(e.tags," at pages\\questionDetail\\questionDetail.vue:352")))})}}};t.default=o}).call(this,i("6e42")["default"],i("0de9")["default"])},"713c":function(e,t,i){"use strict";i.r(t);var n=i("0b0e"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},a057:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.isAddAnswer=!1})},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},a3e7:function(e,t,i){"use strict";(function(e){i("91f7"),i("921b");n(i("66fd"));var t=n(i("b12b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},b12b:function(e,t,i){"use strict";i.r(t);var n=i("a057"),a=i("713c");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);var s=i("2877"),u=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports}},[["a3e7","common/runtime","common/vendor"]]]);
});
require('pages/questionDetail/questionDetail.js');
__wxRoute = 'pages/myAnswer/myAnswer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myAnswer/myAnswer.js';

define('pages/myAnswer/myAnswer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myAnswer/myAnswer"],{"11d7":function(e,t,n){"use strict";(function(e){n("91f7"),n("921b");a(n("66fd"));var t=a(n("7c23"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4f65":function(e,t,n){},"546c":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("6b26"),s={data:function(){return{access_token:"",member_id:"",tabCurrentIndex:0,type:1,navList:[{state:0,text:"指定回答"},{state:1,text:"普通回答"}]}},onLoad:function(){var t=this;e.getStorage({key:"access_token",success:function(e){t.access_token=e.data}}),e.getStorage({key:"member_id",success:function(e){t.member_id=e.data}}),console.log(a(t.member_id," at pages\\myAnswer\\myAnswer.vue:81")),console.log(a(t.access_token," at pages\\myAnswer\\myAnswer.vue:82")),t.getMyanswer(t.type)},methods:{tabClick:function(e){var t=this;t.tabCurrentIndex=e,0==e?t.type=1:1==e&&(t.type=2),t.getMyanswer(t.type)},getMyanswer:function(e){var t=this;(0,c.my_question_list)({member_id:t.member_id,access_token:t.access_token,type:e}).then(function(e){console.log(a(e," at pages\\myAnswer\\myAnswer.vue:105")),e.data.code})}}};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},6809:function(e,t,n){"use strict";var a=n("4f65"),c=n.n(a);c.a},"7c23":function(e,t,n){"use strict";n.r(t);var a=n("adce"),c=n("8b49");for(var s in c)"default"!==s&&function(e){n.d(t,e,function(){return c[e]})}(s);n("6809");var r=n("2877"),u=Object(r["a"])(c["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},"8b49":function(e,t,n){"use strict";n.r(t);var a=n("546c"),c=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);t["default"]=c.a},adce:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c})}},[["11d7","common/runtime","common/vendor"]]]);
});
require('pages/myAnswer/myAnswer.js');
__wxRoute = 'pages/questionDetail/questionDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/questionDetail/questionDetail.js';

define('pages/questionDetail/questionDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/questionDetail/questionDetail"],{"0b0e":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("6b26"),o={data:function(){return{question_id:"",access_token:"",member_id:"",isOpen:!1,isComment:!1,commentText:"",isAddAnswer:!1,answerText:"",imgList:[],videoSrc:"",questionDetail:{},tags:[],isSeeImg:!1,answerList:[],iscanPublish:!0}},onLoad:function(t){var i=this;i.question_id=t.id,e.getStorage({key:"access_token",success:function(e){i.access_token=e.data}}),e.getStorage({key:"member_id",success:function(e){i.member_id=e.data}}),console.log(n(i.member_id," at pages\\questionDetail\\questionDetail.vue:145")),console.log(n(i.access_token," at pages\\questionDetail\\questionDetail.vue:146")),i.getQuestionDetail(),i.getAnswerList()},methods:{seeImg:function(){this.isSeeImg=!0},notSeeImg:function(){this.isSeeImg=!1},getAnswerList:function(){console.log(n("进入"," at pages\\questionDetail\\questionDetail.vue:161"));var e=this;(0,a.answer_lists)({question_id:e.question_id,page:1,limit:10}).then(function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:168")),1==t.data.code&&(e.answerList=t.data.data.list)})},adobtAnswer:function(t){var i=this;adopt_answer({member_id:i.member_id,access_token:i.access_token,answer_id:t}).then(function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:182")),1==t.data.code&&(e.showToast({title:"采纳成功!",duration:2e3,icon:"none"}),i.getAnswerList())})},toAnswer:function(t){e.navigateTo({url:"../answerDetail/answerDetail?id="+t})},uploadImg:function(){var t=this;e.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:208")),0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths,console.log(n(t.imgList," at pages\\questionDetail\\questionDetail.vue:214"))}})},uploadVideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:225")),t.videoSrc=e.tempFilePath}})},submitAnswer:function(){var t=this;t.iscanPublish=!1,(0,a.user_add_answer)({member_id:t.member_id,access_token:t.access_token,content:t.answerText,question_id:t.question_id}).then(function(i){if(console.log(n(i," at pages\\questionDetail\\questionDetail.vue:240")),1!=i.data.code)return e.showToast({title:i.data.msg,duration:2e3,icon:"none"}),!1;var a=i.data.data;if(0==t.imgList.length&&""==t.videoSrc&&(console.log(n("没有视频和图片"," at pages\\questionDetail\\questionDetail.vue:245")),e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+a})),t.imgList.length>0){var o=t.imgList.map(function(e,t){return{name:"image"+t,uri:e}});console.log(n(o," at pages\\questionDetail\\questionDetail.vue:264")),e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_pics",fileType:"image",files:o,formData:{post_id:a,type:"2"},success:function(i){console.log(n(i," at pages\\questionDetail\\questionDetail.vue:274")),200==i.statusCode&&(t.videoSrc?e.uploadFile({url:"http://test.api.lanchonggk.com/industry/api/add_video",filePath:t.videoSrc,fileType:"video",name:"video",formData:{post_id:a,type:"2"},success:function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:288")),200==t.statusCode&&(e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+a}))},fail:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:302"))}}):(e.showToast({title:"回答成功!",duration:2e3,icon:"none"}),e.navigateTo({url:"../answerDetail/answerDetail?id="+a})))},fail:function(e){console.log(n(e," at pages\\questionDetail\\questionDetail.vue:320"))}})}})},toAddAnswer:function(){var e=this;e.isAddAnswer=!0},getQuestionDetail:function(){var e=this;(0,a.question_info)({member_id:e.member_id,access_token:e.access_token,question_id:e.question_id}).then(function(t){console.log(n(t," at pages\\questionDetail\\questionDetail.vue:348")),1==t.data.code&&(e.questionDetail=t.data.data,e.tags=t.data.data.tag_title.split(","),console.log(n(e.tags," at pages\\questionDetail\\questionDetail.vue:352")))})}}};t.default=o}).call(this,i("6e42")["default"],i("0de9")["default"])},"713c":function(e,t,i){"use strict";i.r(t);var n=i("0b0e"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},a057:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.isAddAnswer=!1})},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},a3e7:function(e,t,i){"use strict";(function(e){i("91f7"),i("921b");n(i("66fd"));var t=n(i("b12b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},b12b:function(e,t,i){"use strict";i.r(t);var n=i("a057"),a=i("713c");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);var s=i("2877"),u=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports}},[["a3e7","common/runtime","common/vendor"]]]);
});
require('pages/questionDetail/questionDetail.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"32e7":function(t,n,e){"use strict";(function(t){e("91f7"),e("921b");o(e("66fd"));var n=o(e("828f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"5c6e":function(t,n,e){"use strict";e.r(n);var o=e("725b"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"688a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"725b":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("6b26"),i={data:function(){return{phoneNum:"",verty:"",isCountdown:!1,count:"",timer:null}},onLoad:function(){},methods:{getCode:function(){var n=this;console.log(t("倒计时"," at pages\\login\\login.vue:41"));var e=60;this.sendCode(),this.timer||(this.count=e,this.isCountdown=!0,this.timer=setInterval(function(){n.count>0&&n.count<=e?n.count--:(n.isCountdown=!1,clearInterval(n.timer),n.timer=null)},1e3))},toLogin:function(){return this.phoneNum?this.verty?(console.log(t("login"," at pages\\login\\login.vue:76")),void(0,a.login)({mobile:this.phoneNum,sms_code:this.verty}).then(function(n){console.log(t(n," at pages\\login\\login.vue:81")),1==n.data.code&&(console.log(t(n.data.data.access_token," at pages\\login\\login.vue:83")),console.log(t(n.data.data.id," at pages\\login\\login.vue:84")),o.setStorage({key:"access_token",data:n.data.data.access_token,success:function(){o.setStorage({key:"member_id",data:n.data.data.id,success:function(){n.data.data.tags?o.switchTab({url:"../index/index"}):o.navigateTo({url:"../setTag/setTag"})}})}}))})):(o.showToast({title:"请输入验证码!",duration:2e3,icon:"none"}),!1):(o.showToast({title:"请输入手机号码!",duration:2e3,icon:"none"}),!1)},sendCode:function(){var n=this;if(!this.phoneNum)return o.showToast({title:"请先输入手机号码!",duration:2e3,icon:"none"}),!1;console.log(t("进入接口"," at pages\\login\\login.vue:121")),(0,a.send_code)({mobile:this.phoneNum,type:1}).then(function(e){console.log(t(e," at pages\\login\\login.vue:126")),1==e.data.code?o.showToast({title:"短信发送成功!",duration:2e3,icon:"none"}):(o.showToast({title:"短信发送失败，请重试!",duration:2e3,icon:"none"}),n.isCountdown=!1)})}}};n.default=i}).call(this,e("0de9")["default"],e("6e42")["default"])},"828f":function(t,n,e){"use strict";e.r(n);var o=e("688a"),a=e("5c6e");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var u=e("2877"),s=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports}},[["32e7","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/setTag/setTag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setTag/setTag.js';

define('pages/setTag/setTag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setTag/setTag"],{"0c36":function(t,e,a){"use strict";a.r(e);var c=a("5471"),n=a("dd69");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a("2877"),i=Object(o["a"])(n["default"],c["a"],c["b"],!1,null,null,null);e["default"]=i.exports},"27ce":function(t,e,a){"use strict";(function(t,c){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("6b26"),s={data:function(){return{member_id:"",access_token:"",tagList:[],checkedCount:0}},onLoad:function(){console.log(t(this," at pages\\setTag\\setTag.vue:31"));var e=this;c.getStorage({key:"access_token",success:function(t){e.access_token=t.data}}),c.getStorage({key:"member_id",success:function(t){e.member_id=t.data}}),e.getTags()},methods:{getTags:function(){var e=this;(0,n.get_tags)({member_id:this.member_id,access_token:this.access_token}).then(function(a){console.log(t(a," at pages\\setTag\\setTag.vue:55")),1==a.data.code&&(e.tagList=a.data.data.list,console.log(t(e.tagList," at pages\\setTag\\setTag.vue:58")))})},checkTag:function(t,e){var a=this;a.tagList[t].child[e].is_checked=1,a.checkedCount=0;var c=0;a.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&c++})}),a.checkedCount=c},cancelTag:function(t,e){var a=this;a.tagList[t].child[e].is_checked=0,a.checkedCount=0;var c=0;a.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&c++})}),a.checkedCount=c},submitTag:function(){var e=this,a="";e.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&(a+=t.id+",")})}),a=a.substr(0,a.length-1),console.log(t(a," at pages\\setTag\\setTag.vue:107")),(0,n.tag_add)({member_id:this.member_id,access_token:this.access_token,tagids:a}).then(function(e){console.log(t(e," at pages\\setTag\\setTag.vue:113")),1==e.data.code&&(c.showToast({title:"标签设置成功!",duration:2e3,icon:"none"}),c.switchTab({url:"../index/index"}))})}}};e.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},5471:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return c}),a.d(e,"b",function(){return n})},dd69:function(t,e,a){"use strict";a.r(e);var c=a("27ce"),n=a.n(c);for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);e["default"]=n.a},f7cd:function(t,e,a){"use strict";(function(t){a("91f7"),a("921b");c(a("66fd"));var e=c(a("0c36"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["f7cd","common/runtime","common/vendor"]]]);
});
require('pages/setTag/setTag.js');
__wxRoute = 'pages/setTag/setTag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setTag/setTag.js';

define('pages/setTag/setTag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setTag/setTag"],{"0c36":function(t,e,a){"use strict";a.r(e);var c=a("5471"),n=a("dd69");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a("2877"),i=Object(o["a"])(n["default"],c["a"],c["b"],!1,null,null,null);e["default"]=i.exports},"27ce":function(t,e,a){"use strict";(function(t,c){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("6b26"),s={data:function(){return{member_id:"",access_token:"",tagList:[],checkedCount:0}},onLoad:function(){console.log(t(this," at pages\\setTag\\setTag.vue:31"));var e=this;c.getStorage({key:"access_token",success:function(t){e.access_token=t.data}}),c.getStorage({key:"member_id",success:function(t){e.member_id=t.data}}),e.getTags()},methods:{getTags:function(){var e=this;(0,n.get_tags)({member_id:this.member_id,access_token:this.access_token}).then(function(a){console.log(t(a," at pages\\setTag\\setTag.vue:55")),1==a.data.code&&(e.tagList=a.data.data.list,console.log(t(e.tagList," at pages\\setTag\\setTag.vue:58")))})},checkTag:function(t,e){var a=this;a.tagList[t].child[e].is_checked=1,a.checkedCount=0;var c=0;a.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&c++})}),a.checkedCount=c},cancelTag:function(t,e){var a=this;a.tagList[t].child[e].is_checked=0,a.checkedCount=0;var c=0;a.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&c++})}),a.checkedCount=c},submitTag:function(){var e=this,a="";e.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&(a+=t.id+",")})}),a=a.substr(0,a.length-1),console.log(t(a," at pages\\setTag\\setTag.vue:107")),(0,n.tag_add)({member_id:this.member_id,access_token:this.access_token,tagids:a}).then(function(e){console.log(t(e," at pages\\setTag\\setTag.vue:113")),1==e.data.code&&(c.showToast({title:"标签设置成功!",duration:2e3,icon:"none"}),c.switchTab({url:"../index/index"}))})}}};e.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},5471:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return c}),a.d(e,"b",function(){return n})},dd69:function(t,e,a){"use strict";a.r(e);var c=a("27ce"),n=a.n(c);for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);e["default"]=n.a},f7cd:function(t,e,a){"use strict";(function(t){a("91f7"),a("921b");c(a("66fd"));var e=c(a("0c36"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["f7cd","common/runtime","common/vendor"]]]);
});
require('pages/setTag/setTag.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"1df3":function(n,t,e){"use strict";(function(n){e("91f7"),e("921b");u(e("66fd"));var t=u(e("39a7"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"398c":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},onLoad:function(){},methods:{toQuestion:function(){n.navigateTo({url:"../myQuestion/myQuestion"})},toAnswer:function(){n.navigateTo({url:"../myAnswer/myAnswer"})}}};t.default=e}).call(this,e("6e42")["default"])},"39a7":function(n,t,e){"use strict";e.r(t);var u=e("7bf1"),o=e("6e1b");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);var r=e("2877"),f=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},"6e1b":function(n,t,e){"use strict";e.r(t);var u=e("398c"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},"7bf1":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})}},[["1df3","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"32e7":function(t,n,e){"use strict";(function(t){e("91f7"),e("921b");o(e("66fd"));var n=o(e("828f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"5c6e":function(t,n,e){"use strict";e.r(n);var o=e("725b"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"688a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"725b":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("6b26"),i={data:function(){return{phoneNum:"",verty:"",isCountdown:!1,count:"",timer:null}},onLoad:function(){},methods:{getCode:function(){var n=this;console.log(t("倒计时"," at pages\\login\\login.vue:41"));var e=60;this.sendCode(),this.timer||(this.count=e,this.isCountdown=!0,this.timer=setInterval(function(){n.count>0&&n.count<=e?n.count--:(n.isCountdown=!1,clearInterval(n.timer),n.timer=null)},1e3))},toLogin:function(){return this.phoneNum?this.verty?(console.log(t("login"," at pages\\login\\login.vue:76")),void(0,a.login)({mobile:this.phoneNum,sms_code:this.verty}).then(function(n){console.log(t(n," at pages\\login\\login.vue:81")),1==n.data.code&&(console.log(t(n.data.data.access_token," at pages\\login\\login.vue:83")),console.log(t(n.data.data.id," at pages\\login\\login.vue:84")),o.setStorage({key:"access_token",data:n.data.data.access_token,success:function(){o.setStorage({key:"member_id",data:n.data.data.id,success:function(){n.data.data.tags?o.switchTab({url:"../index/index"}):o.navigateTo({url:"../setTag/setTag"})}})}}))})):(o.showToast({title:"请输入验证码!",duration:2e3,icon:"none"}),!1):(o.showToast({title:"请输入手机号码!",duration:2e3,icon:"none"}),!1)},sendCode:function(){var n=this;if(!this.phoneNum)return o.showToast({title:"请先输入手机号码!",duration:2e3,icon:"none"}),!1;console.log(t("进入接口"," at pages\\login\\login.vue:121")),(0,a.send_code)({mobile:this.phoneNum,type:1}).then(function(e){console.log(t(e," at pages\\login\\login.vue:126")),1==e.data.code?o.showToast({title:"短信发送成功!",duration:2e3,icon:"none"}):(o.showToast({title:"短信发送失败，请重试!",duration:2e3,icon:"none"}),n.isCountdown=!1)})}}};n.default=i}).call(this,e("0de9")["default"],e("6e42")["default"])},"828f":function(t,n,e){"use strict";e.r(n);var o=e("688a"),a=e("5c6e");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var u=e("2877"),s=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports}},[["32e7","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/information/information';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/information/information.js';

define('pages/information/information.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/information/information"],{"3fab":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},onLoad:function(){},methods:{}};t.default=u},5102:function(n,t,e){"use strict";e.r(t);var u=e("3fab"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},"71e6":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},7965:function(n,t,e){"use strict";e.r(t);var u=e("71e6"),a=e("5102");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);var r=e("2877"),f=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},b1df:function(n,t,e){"use strict";(function(n){e("91f7"),e("921b");u(e("66fd"));var t=u(e("7965"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["b1df","common/runtime","common/vendor"]]]);
});
require('pages/information/information.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

