 const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs')

client.commands = new Discord.Collection();


client.once('ready', () => {
    console.log('Kreek is online!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === "hi kreek") {
        message.channel.send('hi <@' + message.author + '>')
    }
})

client.on('message', message => {
    if (message.content.toLowerCase() === "bye kreek") {
        message.channel.send('bye <@' + message.author + '>')
    }
})

client.on('message', message => {
    if (message.content.toLowerCase() === "kreek ping") {
        message.channel.send('hello @everyone')
        message.channel.send('hello @everyone')
        message.channel.send('hello @everyone')
        message.channel.send('hello @everyone')
        message.channel.send('hello @everyone')
    }
})

//////////////////////////

/////////////////////


/////////////////////////////////////////


///////////////////////////////////////


/*
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!')
    } else if (command == 'youtube'){

    }
});

*/

/* client.on('message', message => {
    if (message.member.roles.cache.has(staff)){
        if(!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'kick'){
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(member){
                    member.kick().then(() => {
                        message.reply(`Successfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member')
                        console.log(err)
                    })
                }else{
                    message.reply("Could not find that user.")
                }
            }else{
                message.reply("You need to specify a person!")
            }
        }
    }
}) */

 

///////////////////////////////////////////////

client.on('message', message => {
const blacklisted = [

    
'fuck',
'bitch',
'ass',
'nigger',
'nigga',
'nagga',
'nogga',
'shit',
'bastard',
'sex',
'porn',
'anal',
'blowjob',
'bang',
'smash',
'boob','b@@b',
'penis',
'jackass',
'vagina',
'dick',
'cock','c ock','co ck','coc k','c0ck','c00','co c','co%','co0','c0o','c00','c0x','cox','c ox','c$x','scx',
'crap','crp','craap','cr1','cr2','cr3','c#r','c%r','c^r','c!rap','c!!','cr!!','crr','cra!','cr$p','crrp','cxxp',
'butt','booty','b0o','b00','b@@ty','bu!!','bull*',
'peenis', 'p enis','pe nis','peen','pe en','peee','epnis','pneis','pnis','piss','pi$$','pii','pis$','pi$s','p is','pi s','peis','p$nis','c$ck','c%ck',
'damn','daam','god dam','damit','d amm','d amn',
'cum','cuum','cuuu','cu  ','cuu  ','cmum','c1um','cu m','c.u','u.m','c..u','u..m','u,m','c,u','c/','c;m',
///////////
// fuck stuff
'fvck',
'fvv',
'fnc',
'fg',
'f uck',
'fu ck',
'fuc k',
'f u ck',
'fu c k',
'f u c k',
'fuu',
'fuuck',
'f uu',
'uuu',
'fake you',
'wanna f',
'fuuu',
'fing',
'fii',
'fff',
'f@',
'f$',
'f$ck',
'f*ck',
'f**',
'fu*',
'fuc',
'fck',
'f1c',
'f2c',
'f3c',
'f4c',
'f5c',
'f6c',
'f7c',
'f8c',
'f9c',
'f0c',
'fh',
'fooc',
'f.u',
'u.c',
'c.k',
'f.k',
'f.r',
'r.k',
'f^',
'u^',
'c^',
'k^',
'fnn',
'f,u',
'u,c',
'c,k',
'f0',

//////////

'nagar',
'niger',
'nger',
'nogger',
'n gger',
'ni gger',
'n agger',
'n0igger',
'a$$',
'c0c',
'btth',
'ttch',
'bith',
'biatch',
'bist',
'btch',
'btich',
'bich',
'b.i',
'b  ',
'i.t',
'b.t',
't.h',
'h.c',
'hhe',
'b.e',
'l.ol',
'lo.l',
'l.o.l',
'n.i',
'i.g',
'g.g',
'g.e',
'g.r',
'e.r',
'f.',
'g/',
'n:',
'i:',
'g:',
'nlgger',
'nug',
'g&',
'e%',
'g%',
'g(',
'g$',
'g!',
'n!g',
'e!r',
'n>g',
'n<g',
'i<g',
'i>g',
'ntg',
'ngl',
'nig_',
'g_e',
'n_i',

//////////////

// faggot stuff

'faggot',
'f aggot',
'fa ggot',
'fag got',
'fagg ot',
'faggo t',
'f a ggot',
'fa g got',
'fag g ot',
'fagg o t',
'f a g got',
'fa g g ot',
'fag g o t',
'f a g g ot',
'fa g g o t',
'f a g g o t',
'f  aggot',
'f   aggot',
'f    aggot',
'fa  ggot',
'fa   ggot',
'fa    ggot',
'fag  ',
'f%ggot',
'faxxot',
'faxx',
'fax  ',
'fagg  ',
'fggot',
'fagg',
'f%ag',

////////////

'bish',
'b i t ch',
'biss',
'n igga',
'ni gga',
'nig ga',
'nigg a',
'n i gga',
'ni g ga',
'nig g a',
'n i g ga',
'ni g g a',
'n i g g a',
'ni  ',
'nig  ',
'n$',
'n%',
'nygga',
'nvv',
'nugga',
'nhgga',
'naga',

'nag',
'nbg',
'ncg',
'ndg',
'neg',
'nfg',
'ngg',
'nhg',
'nig',
'njg',
'nkg',
'nlg',
'nmg',
'nng',
'nog',
'npg',
'nqg',
'nrg',
'nsg',
'ntg',
'nug',
'nvg',
'nwg',
'nxg',
'nyg',
'nzg',

'n ag',
'n bg',
'n cg',
'n dg',
'n eg',
'n fg',
'n gg',
'n hg',
'n ig',
'n jg',
'n kg',
'n lg',
'n mg',
'n ng',
'n og',
'n pg',
'n qg',
'n rg',
'n sg',
'n tg',
'n ug',
'n vg',
'n wg',
'n xg',
'n yg',
'n zg',

'na g',
'nb g',
'nc g',
'nd g',
'ne g',
'nf g',
'ng g',
'nh g',
'ni g',
'nj g',
'nk g',
'nl g',
'nm g',
'nn g',
'no g',
'np g',
'nq g',
'nr g',
'ns g',
'nt g',
'nu g',
'nv g',
'nw g',
'nx g',
'ny g',
'nz g',
'g ger',
'hger',
'ager',
'nig ger',
'nxix',
'gxxer',
'nxigger',
'nxi',
'nix',
'nigx',
'niggx',
'ggxer',
'ggexr',
'gxgexr',
'niix',
'niig',
'nngger',
'nggher',
'ngg2er',
'n l g ger',
'noogger',
'niggg',
'nimg',
'naxg',
'saex',
'$ex',
'p o r n',
'p $ rn',
'p**',
'**rn',
'p*rn',
'p*nis',
'suck',
'suk',
'suc',
'suuck',
'suuu',
's uck',
's u ck',
's u c k',
'su ck',
'ho e',
'h0 e',
'ho 9e',
'hye',
'hooe',
'hyte',
'hote',
'hx',
'h x',
'hxe',
'n.igger',
'ni.gger',
'nig.ger',
'nigg.er',
'nigge.r',
'n.i.gger',
'ni.g.ger',
'nig.g.er',
'nigg.e.r',
'.ni',
'niy',
'nia',
'nipper',
'nipple',
'b7b',
'b))',
'b)o',
'b.b',
'igg',
'gger',
'geg',
'jj',
'aag',
'bbi',
'b.i',
'i.t',
'i*t',
'c*h',
't*',
'a*ck',
'duck you',
'd.uck you',
'd.u.ck you',
'du.k you',
'f you',
'f u',
'f. u',
'f. y',
'y.o',
'o.u',
'c..',
'f..u',
'f{c',
'u{c',
'sevv',

'ni.',
'i.g',
'g.a',
'g.g',
'a.a',
'n.i',
'i.i',
'g.er',
'ge.r',
'g.e.r',
'g. ',
'n. ',
'ngi',
'gig',

'xig',


'c*',
'n1g',
'n2g',
'n3g',
'n4g',
'n5g',
'n6g',
'n7g',
'n8g',
'n9g',

'n 1g',
'n 2g',
'n 3g',
'n 4g',
'n 5g',
'n 6g',
'n 7g',
'n 8g',
'n 9g',

'n1 g',
'n2 g',
'n3 g',
'n4 g',
'n5 g',
'n6 g',
'n7 g',
'n8 g',
'n9 g',

'njjxger',
'nigher',
'niii',
'nixx',
'nagger',

'n igger',
'ni gger',
'n i g g e r',

's ex',
'se x',
's e x',
'$ex',
'se  ',
'esx',
'sse',
'sxe',
'sx ',
's#x',
's%',
's!ex',
's!!',
's!ee',
'snex',
'smex',
'slex',
'suex',
's1e',
's2e',
's3e',
's4e',
's5e',
's6e',
's7e',
's8e',
's9e',
'sdex',
'srex',
'e1x',
'e2x',
'e3x',
'e4x',
'e5x',
'e6x',
'e7x',
'e8x',
'e9x',

'eex',
'exx',
'exm',

////////////

// extra shit

'fortnite',
'f ort',
'fo rt',
'for t',
'f o rt',
'fo r t',
'f o r t',
'fart',
'f0rt',
'forknite',
'fortn',
'f.o',
'o.r',
'r.t',
'n.t',
't.e',
'i.e',
'a.a',
'a.b',
'a.c',
'a.d',
'a.e',
'f#',
'youtube',
'kill',
'k ill',
'ki ll',
'kil l',
'k i ll',
'ki l l',
'k i l l',
'kil',

////////////

// more shit

'bruh',
'broh',
'brah',
'braa',
'breh',
'bru',
'brr',
'b.r',
'r.h',
'r.u',
'b  ',
'u  ',
`b"r`,
'lol',
'lul',
'l0l',
'lel',
'lool',
'looo',
'lee',
'1o',
'101',
'10l',
'l01',

//////////////

'http',
'y0utube',
'yno',
'yuo',
'yyu',
'yoo',
'youu',
'ttu',
'bbe',
'bxe',
'h.oe',
'h^',
'ho^',
'o^',
'e^',
'h%',
'h&',
'h!',
'n!g',
'ni!',
'nig!',
'f*r',
'f$r',
'nite',
'n.ite',
'ni.te',
'nit.e',
'nii',
'ttez',
'fff',
'rt.',
'.rt',
'r.t',
'f^',
'f*',
'o*',
'r*',
't*',
'n*',
'i*',
't*',
'e*',
'f..',
'b..',
'b it',

'yt',
'yo t',
'y  ',
'n  ',
'i  ',
'g  ',
'e  ',
'r  ',
'x  ',
's  ',
'b  ',
'h  ',
'o  ',
'a  ',
'$  ',
'%  ',
'^  ',
'f  ',
'u  ',
'c  ',
'k  ',
'y  ',

'p  ',
'pe ',

'f99',

'robl',
'minec',
'r0b',
'r.o',
'o.b',
'b.l',
'l.o',
'o.x',
'r.y',
'rq',
'raa',
'rgg',
'oob',
'.ob',
'r=b',
'b=l',
'l=o',
'min3',
'crfat',
'minef',
'fcr',
'crt',
'm.in',
'm_in',
'm  ',
'n  ',
'c  ',
'ra.',
'r.a',
'ft.',
'y.t',
't_y',
'th.a',
'bii',
'b1',
's#',
'!@',
'@#',
'#@',
'u#',
'c#',
'k#',
'u .',
'uu',
'cc',
'kk',
'mother f',
'mo f',
'mf',
'moother f',
'm.other f',
'm.f',
'pr_',
'r_n',
'r.n',
'sht',
'shht',
'shhh',
's_h',
'p__',
'p_0',
'p0_',
'p>>',
'p>rn',
'porm',
'pron',

////////////////

'f~',
'u~',
'c~',
'k~',
'f!u',
'u!c',
'c!k',
'f! ',
'f !',
'u! ',
'u !',
'c! ',
'c !',
'k! ',
'k !',
'!~',
'!$',
'$u',
'$i',
'!i',
'!g',
/////////////
'y1o',
'y2o',
'y3o',
'y4o',
'y5o',
'y6o',
'y7o',
'y8o',
'y9o',
'yo1',
'yo2',
'yo3',
'yo4',
'yo5',
'yo6',
'yo7',
'yo8',

'sub',
'scribe',
's1b',
's2b',
's3b',
's4b',
's5b',
's6b',
's7b',
's8b',
's9b',
's:b',
's**',
'h**',
'p**',
`p"`,
`p'`,
'p,n',
`n'i`,
`i's`,
`n"`,

'f_c',
'b_i',
'i_t',
'c_h',
'c_k',
'u_k',
'u_c',
'u_s',

///////////


'boobees',
'boo bees',
'bo bees',
'bo o obes',
'b"b',
'b#b',
`b'b`,
`b"b`,
'bxb',
'bp[',
'op[',
'op]',
'op(',
'op)',
'op{',
'op}',
`op"`,
`op'`,
`fi"`,
'fii',
'shoot',
'sh00t',
'sh oot',
's h o',
'hoe',
'hxe',
'h.e',
'h-e',
'hpe',
'h*',
'beat you up',
'hooe',
'hooo',
'ho oe',
'hoxe',

'f*c',
'fu*',
'b*',
'bi*',
'bit*',
'bitc*',
`f'c`,
'fauk',
'fcfk',
'f you',
'f u',
'gay',
'gey',
'g ay',
'ga y',
'g1a',
'g2a',
'g3a',
'g4a',
'g5a',
'g6a',
'g7a',
'g8a',
'g9a',

'f..',
'u..',
'c..',
'k..',

'cch',
'bicc',
'f %',
'u %',
'c %',
'k %',
'6^ck',
'54ck',
'11ck',
'1ck',
'ckk',
'fkk',
'fluu',
'f8c',
'f9c',
'fgc',
'fhc',
'f(',
'f)',
'f&c',
'f,u',
'f,,',
'u,c',
'u,,',
'c,,',
'c,k',
'u.ck',
'f.u',
'f.k',
'fu.k',
'f..ck',
'f!c',
'u!c',
'a!c',
'b!c',
'b!t',
'@s',
':ss',
'.s',
',s',
'a,',
`f"u`,
`u"c`,
`c"k`,
`c'`,
`o"`,
'o:c',
'c^',
'o^',
'o  ',
'c  ',
'k  ',
'c&c',
'crck',
'c_',
'k_',
'f_u',
'fw',
'fd',
'qitch',
'bb',
'^itch',
'b-',
'f-',
'f{',
'u{',
'c{',
'k{',
'f}',
'u}',
'c}',
'k}',
'f|',
'u|',
'c|',
'k|',
'b|',
't|',
'byt',
'bch',
'b%',
'b!t',
'ch!',
'b:',
'i:',
'tc:',
'c:h',
't: ch',
'b(',
'b)',
't{',
't}',
`t"`,
`b"t`,
`bc"`,
`bi"`,
'h~e',
'h__',
'f__',
'b__',
'f**',
'b**',
'sh**',
'n**',
'g**',
'a**',
'gga',
`g"a`,
'n:ig',
'ni:',
'ygger',
'1gg',
'2gg',
'3gg',
'iga',
'gib',
'gig',
'%g',
'a%%',
's+',
'g+',
'g+.',
'gll',
'nx',
'gx',
'gna',
'nnx',
'nii',

'n_x',
'n_i',
'i_g',
'i_x',

//////
// symbol stuff

'ا',
'匚',
'乃',
'千',
'丂',
'ｆ',
'ｋ',
'ϝ',
'≋',
'░',
'••',
'★',
'▀',
'ø',
'°',
'`',
'_+',
'((',
'::',
`''`,
',,',
'@@',
'!!',
'$$',
'%%',
'^^',
'[+',
'==',
'||',
'___',
'++',
'--',
`""`,
';;',
'¯',
'ᑕ',
'k̷',
'f̳',
'{{',
'}}',
';:',
':;',
'.+',
`"+`,
'+.',
'+,',
'@.',
'  ',
`".`,
`";`,
`" ;`,
`" .`,
`" "`,
`* *`,
`* .`,
'& .',
'$ .',

`":`,
'{}',
`'.`,
'//',
';:',
'##',
'??',
'? ?',
'>>',
'> >',
'<<',
'< <',
':',
';',
'...',
'~',
'&',
'#',
',.',
':,',
',,',
'ꜰ',
'ᴜ',
'ᴄ',
'ᴋ',
'.k',
`'k`,
'ɟ',
'ɔ',
'ü',
'Ü',
'🅺',
'ₖ',
'ӄ',
'𝐤',

'_',
'  ',
'[{',
')(',
'.,',
'[.',
'].',
'+-',
'-+',
'++',
'^+',
'$+',
'$-',
' uk',
`'`,
`"`,

/////////////////

'f$uck',
'f.uuk',
'p.e',
'e.n',
'n.i',
'i.s',
'e.e',
'enis',
'n..i',
'i$',
'$e',
'b$',
'a s s',

///////////////////

'f? ',
'u? ',
'c? ',
'k? ',
'b? ',
't? ',
'c? ',
'a? ',
's? ',
'p? ',
'o? ',
't? ',
'g? ',
'n? ',
'e? ',
'w? ',
'v? ',
'd? ',

'fi?',
'fu>',

'f.u.c',
'fu.c',
'uk.c',
'f#',
'u#',
'c#',
'k#',
'fcr',
'gbr',
'gcr',
'gdr',
'gfr',
'negger',
'ghr',
'gdr',
'gjr',
'ftr',
'gvr',
'gvg',
'nvg',
'n.ig',
`n"g`,
`m"i`,
'migg',
'migr',
'miig',
'm7',
'm8',
'm9',
'm1',
'm2',
'mgg',
'tgg',
'f%',
't%',
'f@g',
'p$r',
`p"rn`,
`r"n`,
`r'n`,
`pl'`,
`pl"`,
'p{o',
'r{n',
'p0r',
'p00',
'b0t',
'$h',
's]',
'h{}',
's{}',
'r{}',
'bnch',
'biot',


////////////
// adopt me stuff

'adopt me',
'addopt me',
'addd',
'a.dopt me',
'ad.opt me',
'ado.pt me',
'adop.t me',
'a.d.opt me',
'ad.o.pt me',
'ado.p.t me',
'a.d.o.pt me',
'ad.o.p.t me',
'a.d.o.p.t me',
'a*d',
'd*o',
'o*p',
'p*t',
'm*e',
'a()',
'd()',
'o()',
'p()',
't()',
'm()',
'e()',
'adpt',
'a]',
'p]',
'a*pt',
'ad0',
'adspt',
'asp',
'asap',
'a+d',
'a+b',
'd+o',
'a-d',
'd-o',
'd-o-p',
'p-t',
'a+d',
'd+o',
'p[',
'a[',
'a{',
'a}',
'a(',
'a!!',
'p!!',
't!!',
'p.t',
'a.d',
'o+p',
'ayd',
'abd',
'acd',
'ado',
'pyt',
'dopt',
'd0pt',
'addo',
'd)',
'oof',
'o.of',
'o >',
'4o',
'00f',
'0of',
'o0',
'o of',
'oo f',
'o 0f',
'o. ',
'oo.f',
'o.o',
'f.o',
'o1',
'o2',
'o3',
'o4',
'o5',
'o6',
'o7',
'o8',
'o9',
'f1 ck',
'f2 ck',
'f3 ck',
'f4 ck',
'f5 ck',
'f6 ck',
'f7 ck',
'f8 ck',
'f9 ck',
'fc',
'c1k',
'c k',
'f2',
'cwk',
'fu%',
' ck',
'c.k',
'c>k',
`c'k`,
`c"k`,
'c ,',
'f,ck',

///////////


//////////////

'diic',
'bg',
'dhck',
'd=c',
'c=k',
'i=c',
'a=d',
'o=p',
'd=p',
't=p',
'ptt',
'mm',
's.e',
'e.x',
's.x',
'sx',
's^x',
's(x',
's3',
'x.x',
's..e',
'e..',

's=x',
's:e',
'e:x',
'ee:',
'btt',
'xx',


///////////////

// web stuff

'.com',
'.org',
'ww',
'.gov',
'.net',

//////

/// information stuff

'password',
'p.a',
'a.s',
's.w',
'w.o',
'o.r',
'r.d',
'rrd',
'paswrd',
'p>as',
'a?s',
'p  ',
'a  ',
's  >',
'w?',
'r?',
'd??',
'address',
'do you live',
'do u live',
'd0 u live',
'doo',
'w  ',
'fau',
'fua',
'fuu',
'fnn',
'buu',
'bint',
'bent',
'k ss',
'ki ss',
'ki  ',
'p?sword',
'pass',
'pastw',
't.w',
's.t',
'w.t',
'u.t',
'a.a',
't.c',
'h.k',
'hook',
'bok',
'funk you',
'date',
'd.ate',
't.e',
'eet',
'a.t',
'e.t',
'd>',
'e>',
's>',
'b>',
'?>',
`"$`,
'%#',
'f %',
'f k',
'fu.',
'u..',
'fwu',
'f 0',
'f x',
'n1te',
'luck you',
'l.uck you',
'l ck you',
'llc',
'fll',
'ull',
'btc',
'bbc',
'fct',
'hack',
'h.ack',
'h>',
'hyr',
'hyo',
'hpck',
'h.a',
'a.c',
'a_c',
'c_k',

////
// plus mark things

'a +',
'b +',
'c +',
'd +',
'e +',
'f +',
'g +',
'h +',
'i +',
'j +',
'k +',
'l +',
'm +',
'n +',
'o +',
'p +',
'q +',
'r +',
's +',
't +',
'u +',
'v +',
'w +',
'x +',
'y +',
'z +',

'a ^',
'b ^',
'c ^',
'd ^',
'e ^',
'f ^',
'g ^',
'h ^',
'i ^',
'j ^',
'k ^',
'l ^',
'm ^',
'n ^',
'o ^',
'p ^',
'q ^',
'r ^',
's ^',
't ^',
'u ^',
'v ^',
'w ^',
'x ^',
'y ^',
'z ^',

'‎',
'shut up',
's.hut up',
'h.u',
'n.u',
'u.t',
'u.p',
'en!',
'b!t',

'ᥴ',
'𝕦',
'fu ',
'f k',
'f+',
'g+',
'wtf',
'stf',
'w.tf',
'wt.f',
'ro0',
'fxck',
'vv',
'uu',
'krupp',
'troll',
]



let foundInText = false
for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true
}

if (foundInText) {
    message.delete()
    message.channel.send('Sorry, that word is blacklisted!')
}

////////////////



})

/* const characters = [

    'a',
    'b',
    'c',

]


client.on('message', message => {
    let char = false
    for (var i in characters) {
    if (message.content.toLowerCase()) {
        message.channel.send('sorry that word is blacklisted')
    }

} 


}) */
/////////////////////////////////////////////////////



// Main Commands

// client.on('message', message => {

//         let args = message.content.slice(prefix.length).split(/ +/);

//             if (message.member.roles.cache.has(moderator)){

            
//         switch (args[0]) {
//             case 'kick':

//                 const user = message.mentions.users.first();

//                 if(user){
//                 const member = message.guild.member(user);
//                 if (member){
//                     member.kick().then(() => {
//                         message.reply(`Successfully kicked ${user.tag}`);
//                     }).catch(err => {
//                         message.reply('I was unable to kick the member')
//                         console.log(err)
//                     })
//                 } else{
//                     message.reply("That user isn\'t in this server")
//                 } 
//                 } else{
//                     message.reply("You need to specify a person!")
//                 }
            
//                 break;
//             }

//         }
       
// });


// client.on('message', message => {

//     let args = message.content.substring(prefix.length).split(/ +/);

//     switch (args[0]) {
//         case 'ban':

//             const user = message.mentions.users.first();

//             if(user){
//             const member = message.guild.member(user);
//             if (member){
//                 member.ban().then(() => {
//                     message.reply(`Successfully banned ${user.tag}`);

//                 }).catch(err => {
//                     message.reply('I was unable to ban the member')
//                     console.log(err)
//                 })
//             } else{
//                 message.reply("That user isn\'t in this server")
//             } 
//             } else{
//                 message.reply("You need to specify a person!")
//             }
        
//             break;
//         }
   
// });














// Login


client.login('NzQ4OTg0MDY0ODM2MzcwNTAy.X0lXxA.DKMj53PRERe2pJOOTj3P1CtBrpQ');
