/*! For license information please see presentation.js.LICENSE.txt */
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [7849, 716],
  {
    18653: (i, t, e) => {
      "use strict";
      e.d(t, {
        CX: () => a.u,
        HG: () => a.j,
        KR: () => a.d,
        OE: () => a.b,
        QS: () => a.S,
        ZQ: () => a.g,
        aX: () => n,
        h0: () => a.t,
        nZ: () => a.h,
        o9: () => a.E,
        pk: () => a.f,
        q_: () => a.v,
        sp: () => a.T,
      });
      var a = e(40219),
        n = e(91746);
      e(26601), e(41809), e(69483);
    },
    9342: (i, t, e) => {
      "use strict";
      e.r(t), e.d(t, { default: () => o });
      var a = e(23645),
        n = e.n(a)()(function (i) {
          return i[1];
        });
      n.push([
        i.id,
        ".presentation-container[data-v-54c5b1d2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition: opacity 200ms ease;\n}\n.presentation-container .mask[data-v-54c5b1d2] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  right: 0;\n}\n",
        "",
      ]);
      const o = n;
    },
    48183: (i, t, e) => {
      "use strict";
      e.r(t), e.d(t, { default: () => o });
      var a = e(23645),
        n = e.n(a)()(function (i) {
          return i[1];
        });
      n.push([
        i.id,
        "body[data-v-0ced2574],\n#app[data-v-0ced2574] {\n  background: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n.nocursor[data-v-0ced2574] {\n  cursor: none;\n}\n",
        "",
      ]);
      const o = n;
    },
    23645: (i) => {
      "use strict";
      i.exports = function (i) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var e = i(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e;
            }).join("");
          }),
          (t.i = function (i, e, a) {
            "string" == typeof i && (i = [[null, i, ""]]);
            var n = {};
            if (a)
              for (var o = 0; o < this.length; o++) {
                var l = this[o][0];
                null != l && (n[l] = !0);
              }
            for (var p = 0; p < i.length; p++) {
              var s = [].concat(i[p]);
              (a && n[s[0]]) ||
                (e &&
                  (s[2]
                    ? (s[2] = "".concat(e, " and ").concat(s[2]))
                    : (s[2] = e)),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    29146: (i) => {
      "use strict";
      function t() {
        (this._types = Object.create(null)),
          (this._extensions = Object.create(null));
        for (let i = 0; i < arguments.length; i++) this.define(arguments[i]);
        (this.define = this.define.bind(this)),
          (this.getType = this.getType.bind(this)),
          (this.getExtension = this.getExtension.bind(this));
      }
      (t.prototype.define = function (i, t) {
        for (let e in i) {
          let a = i[e].map(function (i) {
            return i.toLowerCase();
          });
          e = e.toLowerCase();
          for (let i = 0; i < a.length; i++) {
            const n = a[i];
            if ("*" !== n[0]) {
              if (!t && n in this._types)
                throw new Error(
                  'Attempt to change mapping for "' +
                    n +
                    '" extension from "' +
                    this._types[n] +
                    '" to "' +
                    e +
                    '". Pass `force=true` to allow this, otherwise remove "' +
                    n +
                    '" from the list of extensions for "' +
                    e +
                    '".',
                );
              this._types[n] = e;
            }
          }
          if (t || !this._extensions[e]) {
            const i = a[0];
            this._extensions[e] = "*" !== i[0] ? i : i.substr(1);
          }
        }
      }),
        (t.prototype.getType = function (i) {
          let t = (i = String(i)).replace(/^.*[/\\]/, "").toLowerCase(),
            e = t.replace(/^.*\./, "").toLowerCase(),
            a = t.length < i.length;
          return ((e.length < t.length - 1 || !a) && this._types[e]) || null;
        }),
        (t.prototype.getExtension = function (i) {
          return (
            ((i = /^\s*([^;\s]*)/.test(i) && RegExp.$1) &&
              this._extensions[i.toLowerCase()]) ||
            null
          );
        }),
        (i.exports = t);
    },
    13893: (i, t, e) => {
      "use strict";
      let a = e(29146);
      i.exports = new a(e(94415), e(33014));
    },
    33014: (i) => {
      i.exports = {
        "application/prs.cww": ["cww"],
        "application/vnd.1000minds.decision-model+xml": ["1km"],
        "application/vnd.3gpp.pic-bw-large": ["plb"],
        "application/vnd.3gpp.pic-bw-small": ["psb"],
        "application/vnd.3gpp.pic-bw-var": ["pvb"],
        "application/vnd.3gpp2.tcap": ["tcap"],
        "application/vnd.3m.post-it-notes": ["pwn"],
        "application/vnd.accpac.simply.aso": ["aso"],
        "application/vnd.accpac.simply.imp": ["imp"],
        "application/vnd.acucobol": ["acu"],
        "application/vnd.acucorp": ["atc", "acutc"],
        "application/vnd.adobe.air-application-installer-package+zip": ["air"],
        "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
        "application/vnd.adobe.fxp": ["fxp", "fxpl"],
        "application/vnd.adobe.xdp+xml": ["xdp"],
        "application/vnd.adobe.xfdf": ["xfdf"],
        "application/vnd.ahead.space": ["ahead"],
        "application/vnd.airzip.filesecure.azf": ["azf"],
        "application/vnd.airzip.filesecure.azs": ["azs"],
        "application/vnd.amazon.ebook": ["azw"],
        "application/vnd.americandynamics.acc": ["acc"],
        "application/vnd.amiga.ami": ["ami"],
        "application/vnd.android.package-archive": ["apk"],
        "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
        "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
        "application/vnd.antix.game-component": ["atx"],
        "application/vnd.apple.installer+xml": ["mpkg"],
        "application/vnd.apple.keynote": ["key"],
        "application/vnd.apple.mpegurl": ["m3u8"],
        "application/vnd.apple.numbers": ["numbers"],
        "application/vnd.apple.pages": ["pages"],
        "application/vnd.apple.pkpass": ["pkpass"],
        "application/vnd.aristanetworks.swi": ["swi"],
        "application/vnd.astraea-software.iota": ["iota"],
        "application/vnd.audiograph": ["aep"],
        "application/vnd.balsamiq.bmml+xml": ["bmml"],
        "application/vnd.blueice.multipass": ["mpm"],
        "application/vnd.bmi": ["bmi"],
        "application/vnd.businessobjects": ["rep"],
        "application/vnd.chemdraw+xml": ["cdxml"],
        "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
        "application/vnd.cinderella": ["cdy"],
        "application/vnd.citationstyles.style+xml": ["csl"],
        "application/vnd.claymore": ["cla"],
        "application/vnd.cloanto.rp9": ["rp9"],
        "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
        "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
        "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
        "application/vnd.commonspace": ["csp"],
        "application/vnd.contact.cmsg": ["cdbcmsg"],
        "application/vnd.cosmocaller": ["cmc"],
        "application/vnd.crick.clicker": ["clkx"],
        "application/vnd.crick.clicker.keyboard": ["clkk"],
        "application/vnd.crick.clicker.palette": ["clkp"],
        "application/vnd.crick.clicker.template": ["clkt"],
        "application/vnd.crick.clicker.wordbank": ["clkw"],
        "application/vnd.criticaltools.wbs+xml": ["wbs"],
        "application/vnd.ctc-posml": ["pml"],
        "application/vnd.cups-ppd": ["ppd"],
        "application/vnd.curl.car": ["car"],
        "application/vnd.curl.pcurl": ["pcurl"],
        "application/vnd.dart": ["dart"],
        "application/vnd.data-vision.rdz": ["rdz"],
        "application/vnd.dbf": ["dbf"],
        "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
        "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
        "application/vnd.dece.unspecified": ["uvx", "uvvx"],
        "application/vnd.dece.zip": ["uvz", "uvvz"],
        "application/vnd.denovo.fcselayout-link": ["fe_launch"],
        "application/vnd.dna": ["dna"],
        "application/vnd.dolby.mlp": ["mlp"],
        "application/vnd.dpgraph": ["dpg"],
        "application/vnd.dreamfactory": ["dfac"],
        "application/vnd.ds-keypoint": ["kpxx"],
        "application/vnd.dvb.ait": ["ait"],
        "application/vnd.dvb.service": ["svc"],
        "application/vnd.dynageo": ["geo"],
        "application/vnd.ecowin.chart": ["mag"],
        "application/vnd.enliven": ["nml"],
        "application/vnd.epson.esf": ["esf"],
        "application/vnd.epson.msf": ["msf"],
        "application/vnd.epson.quickanime": ["qam"],
        "application/vnd.epson.salt": ["slt"],
        "application/vnd.epson.ssf": ["ssf"],
        "application/vnd.eszigno3+xml": ["es3", "et3"],
        "application/vnd.ezpix-album": ["ez2"],
        "application/vnd.ezpix-package": ["ez3"],
        "application/vnd.fdf": ["fdf"],
        "application/vnd.fdsn.mseed": ["mseed"],
        "application/vnd.fdsn.seed": ["seed", "dataless"],
        "application/vnd.flographit": ["gph"],
        "application/vnd.fluxtime.clip": ["ftc"],
        "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
        "application/vnd.frogans.fnc": ["fnc"],
        "application/vnd.frogans.ltf": ["ltf"],
        "application/vnd.fsc.weblaunch": ["fsc"],
        "application/vnd.fujitsu.oasys": ["oas"],
        "application/vnd.fujitsu.oasys2": ["oa2"],
        "application/vnd.fujitsu.oasys3": ["oa3"],
        "application/vnd.fujitsu.oasysgp": ["fg5"],
        "application/vnd.fujitsu.oasysprs": ["bh2"],
        "application/vnd.fujixerox.ddd": ["ddd"],
        "application/vnd.fujixerox.docuworks": ["xdw"],
        "application/vnd.fujixerox.docuworks.binder": ["xbd"],
        "application/vnd.fuzzysheet": ["fzs"],
        "application/vnd.genomatix.tuxedo": ["txd"],
        "application/vnd.geogebra.file": ["ggb"],
        "application/vnd.geogebra.tool": ["ggt"],
        "application/vnd.geometry-explorer": ["gex", "gre"],
        "application/vnd.geonext": ["gxt"],
        "application/vnd.geoplan": ["g2w"],
        "application/vnd.geospace": ["g3w"],
        "application/vnd.gmx": ["gmx"],
        "application/vnd.google-apps.document": ["gdoc"],
        "application/vnd.google-apps.presentation": ["gslides"],
        "application/vnd.google-apps.spreadsheet": ["gsheet"],
        "application/vnd.google-earth.kml+xml": ["kml"],
        "application/vnd.google-earth.kmz": ["kmz"],
        "application/vnd.grafeq": ["gqf", "gqs"],
        "application/vnd.groove-account": ["gac"],
        "application/vnd.groove-help": ["ghf"],
        "application/vnd.groove-identity-message": ["gim"],
        "application/vnd.groove-injector": ["grv"],
        "application/vnd.groove-tool-message": ["gtm"],
        "application/vnd.groove-tool-template": ["tpl"],
        "application/vnd.groove-vcard": ["vcg"],
        "application/vnd.hal+xml": ["hal"],
        "application/vnd.handheld-entertainment+xml": ["zmm"],
        "application/vnd.hbci": ["hbci"],
        "application/vnd.hhe.lesson-player": ["les"],
        "application/vnd.hp-hpgl": ["hpgl"],
        "application/vnd.hp-hpid": ["hpid"],
        "application/vnd.hp-hps": ["hps"],
        "application/vnd.hp-jlyt": ["jlt"],
        "application/vnd.hp-pcl": ["pcl"],
        "application/vnd.hp-pclxl": ["pclxl"],
        "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
        "application/vnd.ibm.minipay": ["mpy"],
        "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
        "application/vnd.ibm.rights-management": ["irm"],
        "application/vnd.ibm.secure-container": ["sc"],
        "application/vnd.iccprofile": ["icc", "icm"],
        "application/vnd.igloader": ["igl"],
        "application/vnd.immervision-ivp": ["ivp"],
        "application/vnd.immervision-ivu": ["ivu"],
        "application/vnd.insors.igm": ["igm"],
        "application/vnd.intercon.formnet": ["xpw", "xpx"],
        "application/vnd.intergeo": ["i2g"],
        "application/vnd.intu.qbo": ["qbo"],
        "application/vnd.intu.qfx": ["qfx"],
        "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
        "application/vnd.irepository.package+xml": ["irp"],
        "application/vnd.is-xpr": ["xpr"],
        "application/vnd.isac.fcs": ["fcs"],
        "application/vnd.jam": ["jam"],
        "application/vnd.jcp.javame.midlet-rms": ["rms"],
        "application/vnd.jisp": ["jisp"],
        "application/vnd.joost.joda-archive": ["joda"],
        "application/vnd.kahootz": ["ktz", "ktr"],
        "application/vnd.kde.karbon": ["karbon"],
        "application/vnd.kde.kchart": ["chrt"],
        "application/vnd.kde.kformula": ["kfo"],
        "application/vnd.kde.kivio": ["flw"],
        "application/vnd.kde.kontour": ["kon"],
        "application/vnd.kde.kpresenter": ["kpr", "kpt"],
        "application/vnd.kde.kspread": ["ksp"],
        "application/vnd.kde.kword": ["kwd", "kwt"],
        "application/vnd.kenameaapp": ["htke"],
        "application/vnd.kidspiration": ["kia"],
        "application/vnd.kinar": ["kne", "knp"],
        "application/vnd.koan": ["skp", "skd", "skt", "skm"],
        "application/vnd.kodak-descriptor": ["sse"],
        "application/vnd.las.las+xml": ["lasxml"],
        "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
        "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
        "application/vnd.lotus-1-2-3": ["123"],
        "application/vnd.lotus-approach": ["apr"],
        "application/vnd.lotus-freelance": ["pre"],
        "application/vnd.lotus-notes": ["nsf"],
        "application/vnd.lotus-organizer": ["org"],
        "application/vnd.lotus-screencam": ["scm"],
        "application/vnd.lotus-wordpro": ["lwp"],
        "application/vnd.macports.portpkg": ["portpkg"],
        "application/vnd.mapbox-vector-tile": ["mvt"],
        "application/vnd.mcd": ["mcd"],
        "application/vnd.medcalcdata": ["mc1"],
        "application/vnd.mediastation.cdkey": ["cdkey"],
        "application/vnd.mfer": ["mwf"],
        "application/vnd.mfmp": ["mfm"],
        "application/vnd.micrografx.flo": ["flo"],
        "application/vnd.micrografx.igx": ["igx"],
        "application/vnd.mif": ["mif"],
        "application/vnd.mobius.daf": ["daf"],
        "application/vnd.mobius.dis": ["dis"],
        "application/vnd.mobius.mbk": ["mbk"],
        "application/vnd.mobius.mqy": ["mqy"],
        "application/vnd.mobius.msl": ["msl"],
        "application/vnd.mobius.plc": ["plc"],
        "application/vnd.mobius.txf": ["txf"],
        "application/vnd.mophun.application": ["mpn"],
        "application/vnd.mophun.certificate": ["mpc"],
        "application/vnd.mozilla.xul+xml": ["xul"],
        "application/vnd.ms-artgalry": ["cil"],
        "application/vnd.ms-cab-compressed": ["cab"],
        "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
        "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
        "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
        "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
        "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
        "application/vnd.ms-fontobject": ["eot"],
        "application/vnd.ms-htmlhelp": ["chm"],
        "application/vnd.ms-ims": ["ims"],
        "application/vnd.ms-lrm": ["lrm"],
        "application/vnd.ms-officetheme": ["thmx"],
        "application/vnd.ms-outlook": ["msg"],
        "application/vnd.ms-pki.seccat": ["cat"],
        "application/vnd.ms-pki.stl": ["*stl"],
        "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
        "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
        "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
        "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
        "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
        "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
        "application/vnd.ms-project": ["mpp", "mpt"],
        "application/vnd.ms-word.document.macroenabled.12": ["docm"],
        "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
        "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
        "application/vnd.ms-wpl": ["wpl"],
        "application/vnd.ms-xpsdocument": ["xps"],
        "application/vnd.mseq": ["mseq"],
        "application/vnd.musician": ["mus"],
        "application/vnd.muvee.style": ["msty"],
        "application/vnd.mynfc": ["taglet"],
        "application/vnd.neurolanguage.nlu": ["nlu"],
        "application/vnd.nitf": ["ntf", "nitf"],
        "application/vnd.noblenet-directory": ["nnd"],
        "application/vnd.noblenet-sealer": ["nns"],
        "application/vnd.noblenet-web": ["nnw"],
        "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
        "application/vnd.nokia.n-gage.data": ["ngdat"],
        "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
        "application/vnd.nokia.radio-preset": ["rpst"],
        "application/vnd.nokia.radio-presets": ["rpss"],
        "application/vnd.novadigm.edm": ["edm"],
        "application/vnd.novadigm.edx": ["edx"],
        "application/vnd.novadigm.ext": ["ext"],
        "application/vnd.oasis.opendocument.chart": ["odc"],
        "application/vnd.oasis.opendocument.chart-template": ["otc"],
        "application/vnd.oasis.opendocument.database": ["odb"],
        "application/vnd.oasis.opendocument.formula": ["odf"],
        "application/vnd.oasis.opendocument.formula-template": ["odft"],
        "application/vnd.oasis.opendocument.graphics": ["odg"],
        "application/vnd.oasis.opendocument.graphics-template": ["otg"],
        "application/vnd.oasis.opendocument.image": ["odi"],
        "application/vnd.oasis.opendocument.image-template": ["oti"],
        "application/vnd.oasis.opendocument.presentation": ["odp"],
        "application/vnd.oasis.opendocument.presentation-template": ["otp"],
        "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
        "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
        "application/vnd.oasis.opendocument.text": ["odt"],
        "application/vnd.oasis.opendocument.text-master": ["odm"],
        "application/vnd.oasis.opendocument.text-template": ["ott"],
        "application/vnd.oasis.opendocument.text-web": ["oth"],
        "application/vnd.olpc-sugar": ["xo"],
        "application/vnd.oma.dd2+xml": ["dd2"],
        "application/vnd.openblox.game+xml": ["obgx"],
        "application/vnd.openofficeorg.extension": ["oxt"],
        "application/vnd.openstreetmap.data+xml": ["osm"],
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          ["pptx"],
        "application/vnd.openxmlformats-officedocument.presentationml.slide": [
          "sldx",
        ],
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
          ["ppsx"],
        "application/vnd.openxmlformats-officedocument.presentationml.template":
          ["potx"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          "xlsx",
        ],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
          ["xltx"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          ["docx"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
          ["dotx"],
        "application/vnd.osgeo.mapguide.package": ["mgp"],
        "application/vnd.osgi.dp": ["dp"],
        "application/vnd.osgi.subsystem": ["esa"],
        "application/vnd.palm": ["pdb", "pqa", "oprc"],
        "application/vnd.pawaafile": ["paw"],
        "application/vnd.pg.format": ["str"],
        "application/vnd.pg.osasli": ["ei6"],
        "application/vnd.picsel": ["efif"],
        "application/vnd.pmi.widget": ["wg"],
        "application/vnd.pocketlearn": ["plf"],
        "application/vnd.powerbuilder6": ["pbd"],
        "application/vnd.previewsystems.box": ["box"],
        "application/vnd.proteus.magazine": ["mgz"],
        "application/vnd.publishare-delta-tree": ["qps"],
        "application/vnd.pvi.ptid1": ["ptid"],
        "application/vnd.quark.quarkxpress": [
          "qxd",
          "qxt",
          "qwd",
          "qwt",
          "qxl",
          "qxb",
        ],
        "application/vnd.rar": ["rar"],
        "application/vnd.realvnc.bed": ["bed"],
        "application/vnd.recordare.musicxml": ["mxl"],
        "application/vnd.recordare.musicxml+xml": ["musicxml"],
        "application/vnd.rig.cryptonote": ["cryptonote"],
        "application/vnd.rim.cod": ["cod"],
        "application/vnd.rn-realmedia": ["rm"],
        "application/vnd.rn-realmedia-vbr": ["rmvb"],
        "application/vnd.route66.link66+xml": ["link66"],
        "application/vnd.sailingtracker.track": ["st"],
        "application/vnd.seemail": ["see"],
        "application/vnd.sema": ["sema"],
        "application/vnd.semd": ["semd"],
        "application/vnd.semf": ["semf"],
        "application/vnd.shana.informed.formdata": ["ifm"],
        "application/vnd.shana.informed.formtemplate": ["itp"],
        "application/vnd.shana.informed.interchange": ["iif"],
        "application/vnd.shana.informed.package": ["ipk"],
        "application/vnd.simtech-mindmapper": ["twd", "twds"],
        "application/vnd.smaf": ["mmf"],
        "application/vnd.smart.teacher": ["teacher"],
        "application/vnd.software602.filler.form+xml": ["fo"],
        "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
        "application/vnd.spotfire.dxp": ["dxp"],
        "application/vnd.spotfire.sfs": ["sfs"],
        "application/vnd.stardivision.calc": ["sdc"],
        "application/vnd.stardivision.draw": ["sda"],
        "application/vnd.stardivision.impress": ["sdd"],
        "application/vnd.stardivision.math": ["smf"],
        "application/vnd.stardivision.writer": ["sdw", "vor"],
        "application/vnd.stardivision.writer-global": ["sgl"],
        "application/vnd.stepmania.package": ["smzip"],
        "application/vnd.stepmania.stepchart": ["sm"],
        "application/vnd.sun.wadl+xml": ["wadl"],
        "application/vnd.sun.xml.calc": ["sxc"],
        "application/vnd.sun.xml.calc.template": ["stc"],
        "application/vnd.sun.xml.draw": ["sxd"],
        "application/vnd.sun.xml.draw.template": ["std"],
        "application/vnd.sun.xml.impress": ["sxi"],
        "application/vnd.sun.xml.impress.template": ["sti"],
        "application/vnd.sun.xml.math": ["sxm"],
        "application/vnd.sun.xml.writer": ["sxw"],
        "application/vnd.sun.xml.writer.global": ["sxg"],
        "application/vnd.sun.xml.writer.template": ["stw"],
        "application/vnd.sus-calendar": ["sus", "susp"],
        "application/vnd.svd": ["svd"],
        "application/vnd.symbian.install": ["sis", "sisx"],
        "application/vnd.syncml+xml": ["xsm"],
        "application/vnd.syncml.dm+wbxml": ["bdm"],
        "application/vnd.syncml.dm+xml": ["xdm"],
        "application/vnd.syncml.dmddf+xml": ["ddf"],
        "application/vnd.tao.intent-module-archive": ["tao"],
        "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
        "application/vnd.tmobile-livetv": ["tmo"],
        "application/vnd.trid.tpt": ["tpt"],
        "application/vnd.triscape.mxs": ["mxs"],
        "application/vnd.trueapp": ["tra"],
        "application/vnd.ufdl": ["ufd", "ufdl"],
        "application/vnd.uiq.theme": ["utz"],
        "application/vnd.umajin": ["umj"],
        "application/vnd.unity": ["unityweb"],
        "application/vnd.uoml+xml": ["uoml"],
        "application/vnd.vcx": ["vcx"],
        "application/vnd.visio": ["vsd", "vst", "vss", "vsw"],
        "application/vnd.visionary": ["vis"],
        "application/vnd.vsf": ["vsf"],
        "application/vnd.wap.wbxml": ["wbxml"],
        "application/vnd.wap.wmlc": ["wmlc"],
        "application/vnd.wap.wmlscriptc": ["wmlsc"],
        "application/vnd.webturbo": ["wtb"],
        "application/vnd.wolfram.player": ["nbp"],
        "application/vnd.wordperfect": ["wpd"],
        "application/vnd.wqd": ["wqd"],
        "application/vnd.wt.stf": ["stf"],
        "application/vnd.xara": ["xar"],
        "application/vnd.xfdl": ["xfdl"],
        "application/vnd.yamaha.hv-dic": ["hvd"],
        "application/vnd.yamaha.hv-script": ["hvs"],
        "application/vnd.yamaha.hv-voice": ["hvp"],
        "application/vnd.yamaha.openscoreformat": ["osf"],
        "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
        "application/vnd.yamaha.smaf-audio": ["saf"],
        "application/vnd.yamaha.smaf-phrase": ["spf"],
        "application/vnd.yellowriver-custom-menu": ["cmp"],
        "application/vnd.zul": ["zir", "zirz"],
        "application/vnd.zzazz.deck+xml": ["zaz"],
        "application/x-7z-compressed": ["7z"],
        "application/x-abiword": ["abw"],
        "application/x-ace-compressed": ["ace"],
        "application/x-apple-diskimage": ["*dmg"],
        "application/x-arj": ["arj"],
        "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
        "application/x-authorware-map": ["aam"],
        "application/x-authorware-seg": ["aas"],
        "application/x-bcpio": ["bcpio"],
        "application/x-bdoc": ["*bdoc"],
        "application/x-bittorrent": ["torrent"],
        "application/x-blorb": ["blb", "blorb"],
        "application/x-bzip": ["bz"],
        "application/x-bzip2": ["bz2", "boz"],
        "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
        "application/x-cdlink": ["vcd"],
        "application/x-cfs-compressed": ["cfs"],
        "application/x-chat": ["chat"],
        "application/x-chess-pgn": ["pgn"],
        "application/x-chrome-extension": ["crx"],
        "application/x-cocoa": ["cco"],
        "application/x-conference": ["nsc"],
        "application/x-cpio": ["cpio"],
        "application/x-csh": ["csh"],
        "application/x-debian-package": ["*deb", "udeb"],
        "application/x-dgc-compressed": ["dgc"],
        "application/x-director": [
          "dir",
          "dcr",
          "dxr",
          "cst",
          "cct",
          "cxt",
          "w3d",
          "fgd",
          "swa",
        ],
        "application/x-doom": ["wad"],
        "application/x-dtbncx+xml": ["ncx"],
        "application/x-dtbook+xml": ["dtb"],
        "application/x-dtbresource+xml": ["res"],
        "application/x-dvi": ["dvi"],
        "application/x-envoy": ["evy"],
        "application/x-eva": ["eva"],
        "application/x-font-bdf": ["bdf"],
        "application/x-font-ghostscript": ["gsf"],
        "application/x-font-linux-psf": ["psf"],
        "application/x-font-pcf": ["pcf"],
        "application/x-font-snf": ["snf"],
        "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
        "application/x-freearc": ["arc"],
        "application/x-futuresplash": ["spl"],
        "application/x-gca-compressed": ["gca"],
        "application/x-glulx": ["ulx"],
        "application/x-gnumeric": ["gnumeric"],
        "application/x-gramps-xml": ["gramps"],
        "application/x-gtar": ["gtar"],
        "application/x-hdf": ["hdf"],
        "application/x-httpd-php": ["php"],
        "application/x-install-instructions": ["install"],
        "application/x-iso9660-image": ["*iso"],
        "application/x-iwork-keynote-sffkey": ["*key"],
        "application/x-iwork-numbers-sffnumbers": ["*numbers"],
        "application/x-iwork-pages-sffpages": ["*pages"],
        "application/x-java-archive-diff": ["jardiff"],
        "application/x-java-jnlp-file": ["jnlp"],
        "application/x-keepass2": ["kdbx"],
        "application/x-latex": ["latex"],
        "application/x-lua-bytecode": ["luac"],
        "application/x-lzh-compressed": ["lzh", "lha"],
        "application/x-makeself": ["run"],
        "application/x-mie": ["mie"],
        "application/x-mobipocket-ebook": ["prc", "mobi"],
        "application/x-ms-application": ["application"],
        "application/x-ms-shortcut": ["lnk"],
        "application/x-ms-wmd": ["wmd"],
        "application/x-ms-wmz": ["wmz"],
        "application/x-ms-xbap": ["xbap"],
        "application/x-msaccess": ["mdb"],
        "application/x-msbinder": ["obd"],
        "application/x-mscardfile": ["crd"],
        "application/x-msclip": ["clp"],
        "application/x-msdos-program": ["*exe"],
        "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
        "application/x-msmediaview": ["mvb", "m13", "m14"],
        "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
        "application/x-msmoney": ["mny"],
        "application/x-mspublisher": ["pub"],
        "application/x-msschedule": ["scd"],
        "application/x-msterminal": ["trm"],
        "application/x-mswrite": ["wri"],
        "application/x-netcdf": ["nc", "cdf"],
        "application/x-ns-proxy-autoconfig": ["pac"],
        "application/x-nzb": ["nzb"],
        "application/x-perl": ["pl", "pm"],
        "application/x-pilot": ["*prc", "*pdb"],
        "application/x-pkcs12": ["p12", "pfx"],
        "application/x-pkcs7-certificates": ["p7b", "spc"],
        "application/x-pkcs7-certreqresp": ["p7r"],
        "application/x-rar-compressed": ["*rar"],
        "application/x-redhat-package-manager": ["rpm"],
        "application/x-research-info-systems": ["ris"],
        "application/x-sea": ["sea"],
        "application/x-sh": ["sh"],
        "application/x-shar": ["shar"],
        "application/x-shockwave-flash": ["swf"],
        "application/x-silverlight-app": ["xap"],
        "application/x-sql": ["sql"],
        "application/x-stuffit": ["sit"],
        "application/x-stuffitx": ["sitx"],
        "application/x-subrip": ["srt"],
        "application/x-sv4cpio": ["sv4cpio"],
        "application/x-sv4crc": ["sv4crc"],
        "application/x-t3vm-image": ["t3"],
        "application/x-tads": ["gam"],
        "application/x-tar": ["tar"],
        "application/x-tcl": ["tcl", "tk"],
        "application/x-tex": ["tex"],
        "application/x-tex-tfm": ["tfm"],
        "application/x-texinfo": ["texinfo", "texi"],
        "application/x-tgif": ["*obj"],
        "application/x-ustar": ["ustar"],
        "application/x-virtualbox-hdd": ["hdd"],
        "application/x-virtualbox-ova": ["ova"],
        "application/x-virtualbox-ovf": ["ovf"],
        "application/x-virtualbox-vbox": ["vbox"],
        "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
        "application/x-virtualbox-vdi": ["vdi"],
        "application/x-virtualbox-vhd": ["vhd"],
        "application/x-virtualbox-vmdk": ["vmdk"],
        "application/x-wais-source": ["src"],
        "application/x-web-app-manifest+json": ["webapp"],
        "application/x-x509-ca-cert": ["der", "crt", "pem"],
        "application/x-xfig": ["fig"],
        "application/x-xliff+xml": ["*xlf"],
        "application/x-xpinstall": ["xpi"],
        "application/x-xz": ["xz"],
        "application/x-zmachine": [
          "z1",
          "z2",
          "z3",
          "z4",
          "z5",
          "z6",
          "z7",
          "z8",
        ],
        "audio/vnd.dece.audio": ["uva", "uvva"],
        "audio/vnd.digital-winds": ["eol"],
        "audio/vnd.dra": ["dra"],
        "audio/vnd.dts": ["dts"],
        "audio/vnd.dts.hd": ["dtshd"],
        "audio/vnd.lucent.voice": ["lvp"],
        "audio/vnd.ms-playready.media.pya": ["pya"],
        "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
        "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
        "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
        "audio/vnd.rip": ["rip"],
        "audio/x-aac": ["aac"],
        "audio/x-aiff": ["aif", "aiff", "aifc"],
        "audio/x-caf": ["caf"],
        "audio/x-flac": ["flac"],
        "audio/x-m4a": ["*m4a"],
        "audio/x-matroska": ["mka"],
        "audio/x-mpegurl": ["m3u"],
        "audio/x-ms-wax": ["wax"],
        "audio/x-ms-wma": ["wma"],
        "audio/x-pn-realaudio": ["ram", "ra"],
        "audio/x-pn-realaudio-plugin": ["rmp"],
        "audio/x-realaudio": ["*ra"],
        "audio/x-wav": ["*wav"],
        "chemical/x-cdx": ["cdx"],
        "chemical/x-cif": ["cif"],
        "chemical/x-cmdf": ["cmdf"],
        "chemical/x-cml": ["cml"],
        "chemical/x-csml": ["csml"],
        "chemical/x-xyz": ["xyz"],
        "image/prs.btif": ["btif"],
        "image/prs.pti": ["pti"],
        "image/vnd.adobe.photoshop": ["psd"],
        "image/vnd.airzip.accelerator.azv": ["azv"],
        "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
        "image/vnd.djvu": ["djvu", "djv"],
        "image/vnd.dvb.subtitle": ["*sub"],
        "image/vnd.dwg": ["dwg"],
        "image/vnd.dxf": ["dxf"],
        "image/vnd.fastbidsheet": ["fbs"],
        "image/vnd.fpx": ["fpx"],
        "image/vnd.fst": ["fst"],
        "image/vnd.fujixerox.edmics-mmr": ["mmr"],
        "image/vnd.fujixerox.edmics-rlc": ["rlc"],
        "image/vnd.microsoft.icon": ["ico"],
        "image/vnd.ms-dds": ["dds"],
        "image/vnd.ms-modi": ["mdi"],
        "image/vnd.ms-photo": ["wdp"],
        "image/vnd.net-fpx": ["npx"],
        "image/vnd.pco.b16": ["b16"],
        "image/vnd.tencent.tap": ["tap"],
        "image/vnd.valve.source.texture": ["vtf"],
        "image/vnd.wap.wbmp": ["wbmp"],
        "image/vnd.xiff": ["xif"],
        "image/vnd.zbrush.pcx": ["pcx"],
        "image/x-3ds": ["3ds"],
        "image/x-cmu-raster": ["ras"],
        "image/x-cmx": ["cmx"],
        "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
        "image/x-icon": ["*ico"],
        "image/x-jng": ["jng"],
        "image/x-mrsid-image": ["sid"],
        "image/x-ms-bmp": ["*bmp"],
        "image/x-pcx": ["*pcx"],
        "image/x-pict": ["pic", "pct"],
        "image/x-portable-anymap": ["pnm"],
        "image/x-portable-bitmap": ["pbm"],
        "image/x-portable-graymap": ["pgm"],
        "image/x-portable-pixmap": ["ppm"],
        "image/x-rgb": ["rgb"],
        "image/x-tga": ["tga"],
        "image/x-xbitmap": ["xbm"],
        "image/x-xpixmap": ["xpm"],
        "image/x-xwindowdump": ["xwd"],
        "message/vnd.wfa.wsc": ["wsc"],
        "model/vnd.collada+xml": ["dae"],
        "model/vnd.dwf": ["dwf"],
        "model/vnd.gdl": ["gdl"],
        "model/vnd.gtw": ["gtw"],
        "model/vnd.mts": ["mts"],
        "model/vnd.opengex": ["ogex"],
        "model/vnd.parasolid.transmit.binary": ["x_b"],
        "model/vnd.parasolid.transmit.text": ["x_t"],
        "model/vnd.sap.vds": ["vds"],
        "model/vnd.usdz+zip": ["usdz"],
        "model/vnd.valve.source.compiled-map": ["bsp"],
        "model/vnd.vtu": ["vtu"],
        "text/prs.lines.tag": ["dsc"],
        "text/vnd.curl": ["curl"],
        "text/vnd.curl.dcurl": ["dcurl"],
        "text/vnd.curl.mcurl": ["mcurl"],
        "text/vnd.curl.scurl": ["scurl"],
        "text/vnd.dvb.subtitle": ["sub"],
        "text/vnd.fly": ["fly"],
        "text/vnd.fmi.flexstor": ["flx"],
        "text/vnd.graphviz": ["gv"],
        "text/vnd.in3d.3dml": ["3dml"],
        "text/vnd.in3d.spot": ["spot"],
        "text/vnd.sun.j2me.app-descriptor": ["jad"],
        "text/vnd.wap.wml": ["wml"],
        "text/vnd.wap.wmlscript": ["wmls"],
        "text/x-asm": ["s", "asm"],
        "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
        "text/x-component": ["htc"],
        "text/x-fortran": ["f", "for", "f77", "f90"],
        "text/x-handlebars-template": ["hbs"],
        "text/x-java-source": ["java"],
        "text/x-lua": ["lua"],
        "text/x-markdown": ["mkd"],
        "text/x-nfo": ["nfo"],
        "text/x-opml": ["opml"],
        "text/x-org": ["*org"],
        "text/x-pascal": ["p", "pas"],
        "text/x-processing": ["pde"],
        "text/x-sass": ["sass"],
        "text/x-scss": ["scss"],
        "text/x-setext": ["etx"],
        "text/x-sfv": ["sfv"],
        "text/x-suse-ymp": ["ymp"],
        "text/x-uuencode": ["uu"],
        "text/x-vcalendar": ["vcs"],
        "text/x-vcard": ["vcf"],
        "video/vnd.dece.hd": ["uvh", "uvvh"],
        "video/vnd.dece.mobile": ["uvm", "uvvm"],
        "video/vnd.dece.pd": ["uvp", "uvvp"],
        "video/vnd.dece.sd": ["uvs", "uvvs"],
        "video/vnd.dece.video": ["uvv", "uvvv"],
        "video/vnd.dvb.file": ["dvb"],
        "video/vnd.fvt": ["fvt"],
        "video/vnd.mpegurl": ["mxu", "m4u"],
        "video/vnd.ms-playready.media.pyv": ["pyv"],
        "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
        "video/vnd.vivo": ["viv"],
        "video/x-f4v": ["f4v"],
        "video/x-fli": ["fli"],
        "video/x-flv": ["flv"],
        "video/x-m4v": ["m4v"],
        "video/x-matroska": ["mkv", "mk3d", "mks"],
        "video/x-mng": ["mng"],
        "video/x-ms-asf": ["asf", "asx"],
        "video/x-ms-vob": ["vob"],
        "video/x-ms-wm": ["wm"],
        "video/x-ms-wmv": ["wmv"],
        "video/x-ms-wmx": ["wmx"],
        "video/x-ms-wvx": ["wvx"],
        "video/x-msvideo": ["avi"],
        "video/x-sgi-movie": ["movie"],
        "video/x-smv": ["smv"],
        "x-conference/x-cooltalk": ["ice"],
      };
    },
    94415: (i) => {
      i.exports = {
        "application/andrew-inset": ["ez"],
        "application/applixware": ["aw"],
        "application/atom+xml": ["atom"],
        "application/atomcat+xml": ["atomcat"],
        "application/atomdeleted+xml": ["atomdeleted"],
        "application/atomsvc+xml": ["atomsvc"],
        "application/atsc-dwd+xml": ["dwd"],
        "application/atsc-held+xml": ["held"],
        "application/atsc-rsat+xml": ["rsat"],
        "application/bdoc": ["bdoc"],
        "application/calendar+xml": ["xcs"],
        "application/ccxml+xml": ["ccxml"],
        "application/cdfx+xml": ["cdfx"],
        "application/cdmi-capability": ["cdmia"],
        "application/cdmi-container": ["cdmic"],
        "application/cdmi-domain": ["cdmid"],
        "application/cdmi-object": ["cdmio"],
        "application/cdmi-queue": ["cdmiq"],
        "application/cu-seeme": ["cu"],
        "application/dash+xml": ["mpd"],
        "application/davmount+xml": ["davmount"],
        "application/docbook+xml": ["dbk"],
        "application/dssc+der": ["dssc"],
        "application/dssc+xml": ["xdssc"],
        "application/ecmascript": ["es", "ecma"],
        "application/emma+xml": ["emma"],
        "application/emotionml+xml": ["emotionml"],
        "application/epub+zip": ["epub"],
        "application/exi": ["exi"],
        "application/express": ["exp"],
        "application/fdt+xml": ["fdt"],
        "application/font-tdpfr": ["pfr"],
        "application/geo+json": ["geojson"],
        "application/gml+xml": ["gml"],
        "application/gpx+xml": ["gpx"],
        "application/gxf": ["gxf"],
        "application/gzip": ["gz"],
        "application/hjson": ["hjson"],
        "application/hyperstudio": ["stk"],
        "application/inkml+xml": ["ink", "inkml"],
        "application/ipfix": ["ipfix"],
        "application/its+xml": ["its"],
        "application/java-archive": ["jar", "war", "ear"],
        "application/java-serialized-object": ["ser"],
        "application/java-vm": ["class"],
        "application/javascript": ["js", "mjs"],
        "application/json": ["json", "map"],
        "application/json5": ["json5"],
        "application/jsonml+json": ["jsonml"],
        "application/ld+json": ["jsonld"],
        "application/lgr+xml": ["lgr"],
        "application/lost+xml": ["lostxml"],
        "application/mac-binhex40": ["hqx"],
        "application/mac-compactpro": ["cpt"],
        "application/mads+xml": ["mads"],
        "application/manifest+json": ["webmanifest"],
        "application/marc": ["mrc"],
        "application/marcxml+xml": ["mrcx"],
        "application/mathematica": ["ma", "nb", "mb"],
        "application/mathml+xml": ["mathml"],
        "application/mbox": ["mbox"],
        "application/mediaservercontrol+xml": ["mscml"],
        "application/metalink+xml": ["metalink"],
        "application/metalink4+xml": ["meta4"],
        "application/mets+xml": ["mets"],
        "application/mmt-aei+xml": ["maei"],
        "application/mmt-usd+xml": ["musd"],
        "application/mods+xml": ["mods"],
        "application/mp21": ["m21", "mp21"],
        "application/mp4": ["mp4s", "m4p"],
        "application/msword": ["doc", "dot"],
        "application/mxf": ["mxf"],
        "application/n-quads": ["nq"],
        "application/n-triples": ["nt"],
        "application/node": ["cjs"],
        "application/octet-stream": [
          "bin",
          "dms",
          "lrf",
          "mar",
          "so",
          "dist",
          "distz",
          "pkg",
          "bpk",
          "dump",
          "elc",
          "deploy",
          "exe",
          "dll",
          "deb",
          "dmg",
          "iso",
          "img",
          "msi",
          "msp",
          "msm",
          "buffer",
        ],
        "application/oda": ["oda"],
        "application/oebps-package+xml": ["opf"],
        "application/ogg": ["ogx"],
        "application/omdoc+xml": ["omdoc"],
        "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
        "application/oxps": ["oxps"],
        "application/p2p-overlay+xml": ["relo"],
        "application/patch-ops-error+xml": ["xer"],
        "application/pdf": ["pdf"],
        "application/pgp-encrypted": ["pgp"],
        "application/pgp-signature": ["asc", "sig"],
        "application/pics-rules": ["prf"],
        "application/pkcs10": ["p10"],
        "application/pkcs7-mime": ["p7m", "p7c"],
        "application/pkcs7-signature": ["p7s"],
        "application/pkcs8": ["p8"],
        "application/pkix-attr-cert": ["ac"],
        "application/pkix-cert": ["cer"],
        "application/pkix-crl": ["crl"],
        "application/pkix-pkipath": ["pkipath"],
        "application/pkixcmp": ["pki"],
        "application/pls+xml": ["pls"],
        "application/postscript": ["ai", "eps", "ps"],
        "application/provenance+xml": ["provx"],
        "application/pskc+xml": ["pskcxml"],
        "application/raml+yaml": ["raml"],
        "application/rdf+xml": ["rdf", "owl"],
        "application/reginfo+xml": ["rif"],
        "application/relax-ng-compact-syntax": ["rnc"],
        "application/resource-lists+xml": ["rl"],
        "application/resource-lists-diff+xml": ["rld"],
        "application/rls-services+xml": ["rs"],
        "application/route-apd+xml": ["rapd"],
        "application/route-s-tsid+xml": ["sls"],
        "application/route-usd+xml": ["rusd"],
        "application/rpki-ghostbusters": ["gbr"],
        "application/rpki-manifest": ["mft"],
        "application/rpki-roa": ["roa"],
        "application/rsd+xml": ["rsd"],
        "application/rss+xml": ["rss"],
        "application/rtf": ["rtf"],
        "application/sbml+xml": ["sbml"],
        "application/scvp-cv-request": ["scq"],
        "application/scvp-cv-response": ["scs"],
        "application/scvp-vp-request": ["spq"],
        "application/scvp-vp-response": ["spp"],
        "application/sdp": ["sdp"],
        "application/senml+xml": ["senmlx"],
        "application/sensml+xml": ["sensmlx"],
        "application/set-payment-initiation": ["setpay"],
        "application/set-registration-initiation": ["setreg"],
        "application/shf+xml": ["shf"],
        "application/sieve": ["siv", "sieve"],
        "application/smil+xml": ["smi", "smil"],
        "application/sparql-query": ["rq"],
        "application/sparql-results+xml": ["srx"],
        "application/srgs": ["gram"],
        "application/srgs+xml": ["grxml"],
        "application/sru+xml": ["sru"],
        "application/ssdl+xml": ["ssdl"],
        "application/ssml+xml": ["ssml"],
        "application/swid+xml": ["swidtag"],
        "application/tei+xml": ["tei", "teicorpus"],
        "application/thraud+xml": ["tfi"],
        "application/timestamped-data": ["tsd"],
        "application/toml": ["toml"],
        "application/trig": ["trig"],
        "application/ttml+xml": ["ttml"],
        "application/ubjson": ["ubj"],
        "application/urc-ressheet+xml": ["rsheet"],
        "application/urc-targetdesc+xml": ["td"],
        "application/voicexml+xml": ["vxml"],
        "application/wasm": ["wasm"],
        "application/widget": ["wgt"],
        "application/winhlp": ["hlp"],
        "application/wsdl+xml": ["wsdl"],
        "application/wspolicy+xml": ["wspolicy"],
        "application/xaml+xml": ["xaml"],
        "application/xcap-att+xml": ["xav"],
        "application/xcap-caps+xml": ["xca"],
        "application/xcap-diff+xml": ["xdf"],
        "application/xcap-el+xml": ["xel"],
        "application/xcap-ns+xml": ["xns"],
        "application/xenc+xml": ["xenc"],
        "application/xhtml+xml": ["xhtml", "xht"],
        "application/xliff+xml": ["xlf"],
        "application/xml": ["xml", "xsl", "xsd", "rng"],
        "application/xml-dtd": ["dtd"],
        "application/xop+xml": ["xop"],
        "application/xproc+xml": ["xpl"],
        "application/xslt+xml": ["*xsl", "xslt"],
        "application/xspf+xml": ["xspf"],
        "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
        "application/yang": ["yang"],
        "application/yin+xml": ["yin"],
        "application/zip": ["zip"],
        "audio/3gpp": ["*3gpp"],
        "audio/adpcm": ["adp"],
        "audio/amr": ["amr"],
        "audio/basic": ["au", "snd"],
        "audio/midi": ["mid", "midi", "kar", "rmi"],
        "audio/mobile-xmf": ["mxmf"],
        "audio/mp3": ["*mp3"],
        "audio/mp4": ["m4a", "mp4a"],
        "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
        "audio/ogg": ["oga", "ogg", "spx", "opus"],
        "audio/s3m": ["s3m"],
        "audio/silk": ["sil"],
        "audio/wav": ["wav"],
        "audio/wave": ["*wav"],
        "audio/webm": ["weba"],
        "audio/xm": ["xm"],
        "font/collection": ["ttc"],
        "font/otf": ["otf"],
        "font/ttf": ["ttf"],
        "font/woff": ["woff"],
        "font/woff2": ["woff2"],
        "image/aces": ["exr"],
        "image/apng": ["apng"],
        "image/avif": ["avif"],
        "image/bmp": ["bmp"],
        "image/cgm": ["cgm"],
        "image/dicom-rle": ["drle"],
        "image/emf": ["emf"],
        "image/fits": ["fits"],
        "image/g3fax": ["g3"],
        "image/gif": ["gif"],
        "image/heic": ["heic"],
        "image/heic-sequence": ["heics"],
        "image/heif": ["heif"],
        "image/heif-sequence": ["heifs"],
        "image/hej2k": ["hej2"],
        "image/hsj2": ["hsj2"],
        "image/ief": ["ief"],
        "image/jls": ["jls"],
        "image/jp2": ["jp2", "jpg2"],
        "image/jpeg": ["jpeg", "jpg", "jpe"],
        "image/jph": ["jph"],
        "image/jphc": ["jhc"],
        "image/jpm": ["jpm"],
        "image/jpx": ["jpx", "jpf"],
        "image/jxr": ["jxr"],
        "image/jxra": ["jxra"],
        "image/jxrs": ["jxrs"],
        "image/jxs": ["jxs"],
        "image/jxsc": ["jxsc"],
        "image/jxsi": ["jxsi"],
        "image/jxss": ["jxss"],
        "image/ktx": ["ktx"],
        "image/ktx2": ["ktx2"],
        "image/png": ["png"],
        "image/sgi": ["sgi"],
        "image/svg+xml": ["svg", "svgz"],
        "image/t38": ["t38"],
        "image/tiff": ["tif", "tiff"],
        "image/tiff-fx": ["tfx"],
        "image/webp": ["webp"],
        "image/wmf": ["wmf"],
        "message/disposition-notification": ["disposition-notification"],
        "message/global": ["u8msg"],
        "message/global-delivery-status": ["u8dsn"],
        "message/global-disposition-notification": ["u8mdn"],
        "message/global-headers": ["u8hdr"],
        "message/rfc822": ["eml", "mime"],
        "model/3mf": ["3mf"],
        "model/gltf+json": ["gltf"],
        "model/gltf-binary": ["glb"],
        "model/iges": ["igs", "iges"],
        "model/mesh": ["msh", "mesh", "silo"],
        "model/mtl": ["mtl"],
        "model/obj": ["obj"],
        "model/step+xml": ["stpx"],
        "model/step+zip": ["stpz"],
        "model/step-xml+zip": ["stpxz"],
        "model/stl": ["stl"],
        "model/vrml": ["wrl", "vrml"],
        "model/x3d+binary": ["*x3db", "x3dbz"],
        "model/x3d+fastinfoset": ["x3db"],
        "model/x3d+vrml": ["*x3dv", "x3dvz"],
        "model/x3d+xml": ["x3d", "x3dz"],
        "model/x3d-vrml": ["x3dv"],
        "text/cache-manifest": ["appcache", "manifest"],
        "text/calendar": ["ics", "ifb"],
        "text/coffeescript": ["coffee", "litcoffee"],
        "text/css": ["css"],
        "text/csv": ["csv"],
        "text/html": ["html", "htm", "shtml"],
        "text/jade": ["jade"],
        "text/jsx": ["jsx"],
        "text/less": ["less"],
        "text/markdown": ["markdown", "md"],
        "text/mathml": ["mml"],
        "text/mdx": ["mdx"],
        "text/n3": ["n3"],
        "text/plain": [
          "txt",
          "text",
          "conf",
          "def",
          "list",
          "log",
          "in",
          "ini",
        ],
        "text/richtext": ["rtx"],
        "text/rtf": ["*rtf"],
        "text/sgml": ["sgml", "sgm"],
        "text/shex": ["shex"],
        "text/slim": ["slim", "slm"],
        "text/spdx": ["spdx"],
        "text/stylus": ["stylus", "styl"],
        "text/tab-separated-values": ["tsv"],
        "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
        "text/turtle": ["ttl"],
        "text/uri-list": ["uri", "uris", "urls"],
        "text/vcard": ["vcard"],
        "text/vtt": ["vtt"],
        "text/xml": ["*xml"],
        "text/yaml": ["yaml", "yml"],
        "video/3gpp": ["3gp", "3gpp"],
        "video/3gpp2": ["3g2"],
        "video/h261": ["h261"],
        "video/h263": ["h263"],
        "video/h264": ["h264"],
        "video/iso.segment": ["m4s"],
        "video/jpeg": ["jpgv"],
        "video/jpm": ["*jpm", "jpgm"],
        "video/mj2": ["mj2", "mjp2"],
        "video/mp2t": ["ts"],
        "video/mp4": ["mp4", "mp4v", "mpg4"],
        "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
        "video/ogg": ["ogv"],
        "video/quicktime": ["qt", "mov"],
        "video/webm": ["webm"],
      };
    },
    44799: (i, t, e) => {
      "use strict";
      e.r(t);
      var a = e(51505),
        n = e(2954),
        o = e(63477),
        l = e.n(o),
        p = e(52339),
        s = e(7703),
        r =
          (e(67657),
          function (i, t, e, a) {
            return new (e || (e = Promise))(function (n, o) {
              function l(i) {
                try {
                  s(a.next(i));
                } catch (i) {
                  o(i);
                }
              }
              function p(i) {
                try {
                  s(a.throw(i));
                } catch (i) {
                  o(i);
                }
              }
              function s(i) {
                var t;
                i.done
                  ? n(i.value)
                  : ((t = i.value),
                    t instanceof e
                      ? t
                      : new e(function (i) {
                          i(t);
                        })).then(l, p);
              }
              s((a = a.apply(i, t || [])).next());
            });
          });
      const d = (0, n.aZ)({
        __name: "app",
        setup(i) {
          const t = (0, n.XI)(),
            e = (0, n.iH)(!1);
          return (
            (0, n.bv)(() =>
              r(this, void 0, void 0, function* () {
                const i = l().parse(window.location.search.slice(1)),
                  a = parseInt(i.remoteId);
                (t.value = new s.vN(a)),
                  yield new Promise((i) => setTimeout(i, 200)),
                  yield t.value.init(),
                  (e.value = !0);
              }),
            ),
            { __sfc: !0, presenter: t, initialized: e, PitchContainer: p.Z }
          );
        },
      });
      e(79285);
      const c = (0, e(51900).Z)(
        d,
        function () {
          var i = this,
            t = i._self._c,
            e = i._self._setupProxy;
          return t(
            "div",
            { staticClass: "nocursor", attrs: { id: "app", tabindex: "-1" } },
            [
              e.initialized
                ? t(e.PitchContainer, {
                    style: {
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    },
                    attrs: { presenter: e.presenter },
                  })
                : i._e(),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "0ced2574",
        null,
      ).exports;
      (0, a.Z)(c, { name: "presentation" });
    },
    70716: (i, t, e) => {
      "use strict";
      var a;
      e.d(t, { v: () => a, w: () => n }),
        (function (i) {
          (i.LOGICRIGHT = "org.xmind.ui.logic.right"),
            (i.LOGICLEFT = "org.xmind.ui.logic.left"),
            (i.TREERIGHT = "org.xmind.ui.tree.right"),
            (i.TREELEFT = "org.xmind.ui.tree.left"),
            (i.TREESIDED = "org.xmind.ui.timeline.vertical"),
            (i.ORGCHARTDOWN = "org.xmind.ui.org-chart.down"),
            (i.ORGCHARTUP = "org.xmind.ui.org-chart.up"),
            (i.MAPCLOCKWISE = "org.xmind.ui.map.clockwise"),
            (i.MAPANTICLOCKWISE = "org.xmind.ui.map.anticlockwise"),
            (i.MAP = "org.xmind.ui.map"),
            (i.MAPUNBALANCED = "org.xmind.ui.map.unbalanced"),
            (i.MAPFLOATING = "org.xmind.ui.map.floating"),
            (i.MAPFLOATINGCLOCKWISE = "org.xmind.ui.map.floating.clockwise"),
            (i.MAPFLOATINGANTICLOCKWISE =
              "org.xmind.ui.map.floating.anticlockwise"),
            (i.TIMELINETHROUGHVERTICAL =
              "org.xmind.ui.timeline.through.vertical"),
            (i.TIMELINESIDEDHORIZONTAL =
              "org.xmind.ui.timeline.sided.horizontal"),
            (i.TIMELINEHORIZONTAL = "org.xmind.ui.timeline.horizontal"),
            (i.FISHBONELEFTHEADED = "org.xmind.ui.fishbone.leftHeaded"),
            (i.LEFTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.lefthead.topbone"),
            (i.LEFTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.lefthead.bottombone"),
            (i.FISHBONERIGHTHEADED = "org.xmind.ui.fishbone.rightHeaded"),
            (i.RIGHTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.righthead.topbone"),
            (i.RIGHTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.righthead.bottombone"),
            (i.SPREADSHEET = "org.xmind.ui.spreadsheet"),
            (i.COLUMNSPREADSHEET = "org.xmind.ui.spreadsheet.column"),
            (i.TREETABLE = "org.xmind.ui.treetable"),
            (i.TOPTITLETREETABLE = "org.xmind.ui.treetable.toptitle"),
            (i.SPREADSHEETROW = "org.xmind.ui.structure.spreadsheet.row"),
            (i.SPREADSHEETCOLUMN = "org.xmind.ui.structure.column.spreadsheet"),
            (i.FISHBONELEFTHEADTOP = "org.xmind.ui.fishbone.leftHeaded.top"),
            (i.FISHBONELEFTHEADBOTTOM =
              "org.xmind.ui.fishbone.leftHeaded.bottom"),
            (i.FISHBONERIGHTHEADTOP = "org.xmind.ui.fishbone.rightHeaded.top"),
            (i.FISHBONERIGHTHEADBOTTOM =
              "org.xmind.ui.fishbone.rightHeaded.bottom"),
            (i.TIMELINEHORIZONTALUP = "org.xmind.ui.timeline.horizontal.up"),
            (i.TIMELINEHORIZONTALDOWN =
              "org.xmind.ui.timeline.horizontal.down"),
            (i.LOGICCHARTRIGHT = "org.xmind.ui.logic-chart.right"),
            (i.LOGICCHARTLEFT = "org.xmind.ui.logic-chart.left"),
            (i.BRACERIGHT = "org.xmind.ui.brace.right"),
            (i.BRACELEFT = "org.xmind.ui.brace.left"),
            (i.TIMELINEVERTICAL = "org.xmind.ui.timeline.vertical");
        })(a || (a = {}));
      const n = {
        [a.MAPUNBALANCED]: "map-unbalance",
        [a.MAPCLOCKWISE]: "map-clockwise",
        [a.LOGICRIGHT]: "logic-right",
        [a.LOGICLEFT]: "logic-left",
        [a.BRACERIGHT]: "brace-right",
        [a.BRACELEFT]: "brace-left",
        [a.TREERIGHT]: "tree-right",
        [a.TREELEFT]: "tree-left",
        [a.ORGCHARTDOWN]: "org-down",
        [a.ORGCHARTUP]: "org-up",
        [a.FISHBONELEFTHEADED]: "fishbone-left",
        [a.FISHBONERIGHTHEADED]: "fishbone-right",
        [a.TIMELINEHORIZONTAL]: "timeline-horizontal",
        [a.TIMELINEVERTICAL]: "timeline-vertical",
        [a.TIMELINETHROUGHVERTICAL]: "timeline-through-vertical",
        [a.TIMELINESIDEDHORIZONTAL]: "timeline-sided-horizontal",
        [a.SPREADSHEET]: "matrix-row",
        [a.COLUMNSPREADSHEET]: "matrix-column",
        [a.TOPTITLETREETABLE]: "tree-table-column",
        [a.TREETABLE]: "tree-table-row",
      };
    },
    96160: (i, t, e) => {
      "use strict";
      e.d(t, {
        CX: () => f.CX,
        HG: () => f.HG,
        KR: () => f.KR,
        OE: () => f.OE,
        QS: () => f.QS,
        ZQ: () => f.ZQ,
        aX: () => f.aX,
        h0: () => f.h0,
        nZ: () => f.nZ,
        o9: () => f.o9,
        pk: () => f.pk,
        sp: () => f.sp,
        viewerKit: () => f.q_,
      });
      var a = e(40219),
        n = e(71017),
        o = e.n(n),
        l = e(72298),
        p = e(94593),
        s = e(13893),
        r = e.n(s),
        d = e(7104),
        c = e(5893),
        m = e(90435),
        u = e(54856),
        v = e(50965),
        x = e(92636),
        f = e(18653),
        h = function (i, t, e, a) {
          return new (e || (e = Promise))(function (n, o) {
            function l(i) {
              try {
                s(a.next(i));
              } catch (i) {
                o(i);
              }
            }
            function p(i) {
              try {
                s(a.throw(i));
              } catch (i) {
                o(i);
              }
            }
            function s(i) {
              var t;
              i.done
                ? n(i.value)
                : ((t = i.value),
                  t instanceof e
                    ? t
                    : new e(function (i) {
                        i(t);
                      })).then(l, p);
            }
            s((a = a.apply(i, t || [])).next());
          });
        };
      const { getGlobalConfig: g, globalConfigSetup: b } = a.i;
      function w(i) {
        return h(this, void 0, void 0, function* () {
          return !(yield m.ZP.fetch(u.Gy, i));
        });
      }
      !(function () {
        const i = {
            translatesCtrlClickAsContextMenu: !1,
            translatesCtrlEnterAsInsertingLineBreak: !0,
            translatesCtrlZAsUndo: !0,
            translatesPointerTypePenAsPointerTypeMouse: !0,
          },
          t = (0, c.u3)(o().join((0, d.bY)(), "/static/snowbird/resource/"));
        a.i.globalConfigSetup({
          pathToUrl: c.u3,
          platformMapper: (t) => i[t],
          guidedPayment: w,
          featureIsCurrentlyRestricted: (i) =>
            (0, v.Yh)().status !== x.wi.VALID &&
            !x.nd &&
            (m.ZP.fetch(u.Fx, {
              name: "dialog-activate",
              query: { innerFeatureName: i },
            }),
            !0),
          assetsBaseURL: t,
          clipboard: {
            read: () =>
              h(this, void 0, void 0, function* () {
                const i = yield l.clipboard.readText("clipboard"),
                  t = yield l.clipboard.readHTML("clipboard"),
                  e = yield (function () {
                    return h(this, void 0, void 0, function* () {
                      let i = [];
                      if (l.clipboard.has("CF_HDROP")) {
                        const t =
                          l.clipboard.readBuffer("CF_HDROP").toString("ucs2") ||
                          "";
                        let e = [...t]
                          .filter((i, e) => 0 !== t.charCodeAt(e))
                          .join("")
                          .replace(/\\/g, "\\");
                        const a = e.match(/[a-zA-Z]:\\/);
                        if (a) {
                          const t = e.indexOf(a[0]);
                          0 !== t && (e = e.substring(t)),
                            (i = e
                              .split(a[0])
                              .filter((i) => i)
                              .map((i) => a + i));
                        }
                      } else
                        i = [
                          l.clipboard
                            .readBuffer("FileNameW")
                            .toString("ucs2")
                            .replace(RegExp(String.fromCharCode(0), "g"), ""),
                        ].filter((i) => i);
                      const t = [];
                      for (const e of i) {
                        const i = o().basename(e),
                          a = r().getType(o().extname(e).substring(1));
                        try {
                          const n = yield p.Z.readFile(e);
                          t.push(
                            new File([new Blob([n.buffer], { type: a })], i, {
                              type: a,
                            }),
                          );
                        } catch (i) {}
                      }
                      if (0 === t.length) {
                        const i = l.clipboard.readImage();
                        i.isEmpty() ||
                          t.push(
                            new File(
                              [
                                new Blob([i.toPNG().buffer], {
                                  type: "image/png",
                                }),
                              ],
                              "Untitled.png",
                              { type: "image/png" },
                            ),
                          );
                      }
                      return t;
                    });
                  })();
                return e.some((i) => !i.type.startsWith("image")) &&
                  (yield w("insertAttachment"))
                  ? { text: null, html: null }
                  : { text: i, html: t, files: e };
              }),
            write: (i) =>
              h(this, void 0, void 0, function* () {
                var t;
                const e = yield null === (t = i.image) || void 0 === t
                    ? void 0
                    : t.arrayBuffer(),
                  a = e ? l.nativeImage.createFromBuffer(Buffer.from(e)) : null;
                return l.clipboard.write(
                  { text: i.text, html: i.html, image: a },
                  "clipboard",
                );
              }),
          },
        });
      })();
    },
    92344: (i, t, e) => {
      "use strict";
      e.d(t, {
        yh: () => s,
        dM: () => x,
        I6: () => v,
        zF: () => u,
        Y$: () => o.Y,
      });
      var a = e(94025),
        n = e(24813),
        o = e(38853);
      class l {
        constructor() {
          this.eventCallbacks = new Map();
        }
        on(i, t) {
          var e;
          const a =
            null !== (e = this.eventCallbacks.get(i)) && void 0 !== e ? e : [];
          this.eventCallbacks.set(i, [...a, t]);
        }
        off(i, t) {
          var e;
          let a =
            null !== (e = this.eventCallbacks.get(i)) && void 0 !== e ? e : [];
          (a = a.filter((i) => i !== t)), this.eventCallbacks.set(i, a);
        }
        emit(i) {
          const t = this.eventCallbacks.get(i.eventName);
          if (t) for (const e of t) e(i);
        }
        unload() {
          this.eventCallbacks = new Map();
        }
      }
      var p = function (i, t, e, a) {
        return new (e || (e = Promise))(function (n, o) {
          function l(i) {
            try {
              s(a.next(i));
            } catch (i) {
              o(i);
            }
          }
          function p(i) {
            try {
              s(a.throw(i));
            } catch (i) {
              o(i);
            }
          }
          function s(i) {
            var t;
            i.done
              ? n(i.value)
              : ((t = i.value),
                t instanceof e
                  ? t
                  : new e(function (i) {
                      i(t);
                    })).then(l, p);
          }
          s((a = a.apply(i, t || [])).next());
        });
      };
      class s extends l {
        constructor(i) {
          var t;
          super(),
            (this._presenters = []),
            (this._isStarted = !1),
            (this._disableSettingsUpdate = !1),
            (this._traveledTopicSet = new Set()),
            (this._needSubscriptionHint = !1),
            (this.slideControl = (i) =>
              p(this, void 0, void 0, function* () {
                const { action: t, value: e } = i;
                switch (t) {
                  case "goto":
                    return yield this.slideshow.present(e);
                  case "next":
                    return yield this.slideshow.forward();
                  case "prev":
                    return yield this.slideshow.backward();
                  case "fastBackward":
                    return yield this.slideshow.fastBackward();
                  case "fastForward":
                    return yield this.slideshow.fastForward();
                  case "updateSlide":
                    return yield this.slideshow.forceUpdateSlideContent();
                }
              })),
            (this.changeSlideSetting = (i) => {
              const { action: t, option: e } = i;
              switch (t) {
                case "theme":
                  return this.changeTheme(e);
                case "aspect":
                  return this.changeSlideAspect(e);
                case "animation":
                  return this.switchAnimationOption(e);
                case "watermark":
                  return this.switchWatermarkOption(e);
              }
            }),
            (this.unloaded = !1),
            (this.settings = (0, o.Y)()),
            (this._startTopicId =
              null !== (t = i.startTopicId) && void 0 !== t ? t : null),
            (this._suggestedSlideSize = i.suggestedSlideSize),
            (this._disableSettingsUpdate = i.disableSettingsUpdate),
            (this._needSubscriptionHint = !!i.needSubscriptionHint),
            this.initSlideshow(i);
        }
        get presenters() {
          return this._presenters;
        }
        get slideshow() {
          return this._slideshow;
        }
        get isShowingEnding() {
          return this._slideshow.isShowingEndingScreen;
        }
        get currentSlide() {
          return this.slideshow.currentSlide;
        }
        initSlideshow(i) {
          var t, e, o, l;
          const p = i.contentProviderData
              ? (0, n.xm)(i.contentProviderData)
              : (0, n.n2)(),
            s =
              null !== (t = i.defaultAspect) && void 0 !== t
                ? t
                : this.settings.slideAspect.value,
            r =
              "Auto" === s
                ? null !==
                    (o =
                      null === (e = i.suggestedSlideSize) || void 0 === e
                        ? void 0
                        : e.value) && void 0 !== o
                  ? o
                  : "16:9"
                : s;
          (this._slideshow = new a.ur({
            contentProvider: p,
            slideTheme:
              null !== (l = i.defaultSlideTheme) && void 0 !== l
                ? l
                : this.settings.slideTheme.value,
            slideSize: r,
            disablesWatermark: !this.settings.watermarkEnabled.value,
            preferredLanguage: this.settings.preferredLanguage.value,
          })),
            (this._slideshow.disablesAnimations =
              !this.settings.animationEnabled.value),
            this._slideshow.on("finish", () => this.finish()),
            this._slideshow.on("stateDidChange", () => {
              this.presenters.forEach((i) => i.stateChangedHandler());
            }),
            this._slideshow.on("transitionStart", ({ request: i }) => {
              const t = this._slideshow.computeNextStoppedSlide(i);
              t &&
                (this._traveledTopicSet.add(t),
                this._needSubscriptionHint &&
                  this._traveledTopicSet.size > 5 &&
                  this.emit({ eventName: "needSubscription" })),
                this.emit({
                  eventName: "slideChangeStart",
                  payload: { request: i, targetSlide: t },
                });
            }),
            this._slideshow.on("transitionEnd", () =>
              this.emit({ eventName: "slideChangeEnd" }),
            ),
            this._slideshow.on("modalOpened", () =>
              this.emit({ eventName: "presenterModal", payload: { show: !0 } }),
            ),
            this._slideshow.on("modalClosed", () =>
              this.emit({ eventName: "presenterModal", payload: { show: !1 } }),
            ),
            this._slideshow.on("reveal", ({ request: i }) =>
              this.emit({
                eventName: "presenterLinkClick",
                payload: { title: i.title, href: i.href, topicId: i.topicId },
              }),
            ),
            this._slideshow.on("playWebVideo", ({ request: i }) => {
              this.emit({
                eventName: "playWebVideo",
                payload: { videoSource: i.videoSource },
              });
            });
        }
        addPresenter(i) {
          this._presenters.includes(i) ||
            (this._presenters.push(i), this.slideshow.addPresenter(i.view));
        }
        removePresenter(i) {
          (this._presenters = this._presenters.filter((t) => t !== i)),
            this.slideshow.removePresenter(i.view);
        }
        switchAnimationOption(i) {
          var t;
          (this.slideshow.disablesAnimations = !i),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateAnimationSetting(i));
        }
        switchWatermarkOption(i) {
          var t;
          this.slideshow.disablesWatermark !== !i &&
            (this.slideshow.changeWatermarkDisabled(!i),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateWatermarkSetting(i)));
        }
        changeTheme(i) {
          var t;
          this.slideshow.slideAppearanceId !== i &&
            (this.slideshow.changeSlideTheme(i),
            !this._disableSettingsUpdate &&
              (null === (t = this.settings) ||
                void 0 === t ||
                t.updateSlideThemeSetting(i)));
        }
        changeSlideAspect(i) {
          var t, e, n;
          const o =
            "Auto" === i
              ? null !==
                  (e =
                    null === (t = this._suggestedSlideSize) || void 0 === t
                      ? void 0
                      : t.value) && void 0 !== e
                ? e
                : "16:9"
              : i;
          this.slideshow.changeSlideSize(a.IE[o]),
            !this._disableSettingsUpdate &&
              (null === (n = this.settings) ||
                void 0 === n ||
                n.updateSlideAspectSetting(i));
        }
        start(i) {
          return p(this, void 0, void 0, function* () {
            this._isStarted ||
              (i.forEach((i) => this.addPresenter(i)),
              this.slideshow.present(this._startTopicId),
              (this._isStarted = !0));
          });
        }
        finish() {
          this.emit({ eventName: "slidePlayFinished" });
        }
        unload() {
          this.emit({ eventName: "beforeUnload" }),
            super.unload(),
            (this.unloaded = !0);
        }
      }
      var r = e(90435),
        d = e(16704),
        c = e(54856),
        m = function (i, t, e, a) {
          return new (e || (e = Promise))(function (n, o) {
            function l(i) {
              try {
                s(a.next(i));
              } catch (i) {
                o(i);
              }
            }
            function p(i) {
              try {
                s(a.throw(i));
              } catch (i) {
                o(i);
              }
            }
            function s(i) {
              var t;
              i.done
                ? n(i.value)
                : ((t = i.value),
                  t instanceof e
                    ? t
                    : new e(function (i) {
                        i(t);
                      })).then(l, p);
            }
            s((a = a.apply(i, t || [])).next());
          });
        };
      function u() {
        const i = (0, d.hb)(),
          t = r.ZP.route(c.OV.CONNECT_MAIN(i), (i) =>
            m(this, void 0, void 0, function* () {
              switch (i.type) {
                case "retrieveContent":
                  return JSON.stringify(yield (0, n.d4)());
                case "dismiss":
                  return t();
                case "openHyperlink":
                  return null;
              }
            }),
          );
        return i;
      }
      function v(i) {
        return m(this, void 0, void 0, function* () {
          const t = yield r.ZP.fetch(c.OV.CONNECT_MAIN(i), {
            type: "retrieveContent",
          });
          return JSON.parse(t);
        });
      }
      function x(i) {
        r.ZP.fetch(c.OV.CONNECT_MAIN(i), { type: "dismiss" });
      }
    },
    38853: (i, t, e) => {
      "use strict";
      e.d(t, { Y: () => r });
      var a = e(2954),
        n = e(50965),
        o = e(96160),
        l = e(24813);
      function p(i) {
        var t, e;
        return null !==
          (e =
            null === (t = (0, l.pP)(i)) || void 0 === t
              ? void 0
              : t["slide-appearance"]) && void 0 !== e
          ? e
          : "default";
      }
      function s(i) {
        var t, e;
        return null !==
          (e =
            null === (t = (0, l.pP)(i)) || void 0 === t
              ? void 0
              : t["slide-aspect-ratio"]) && void 0 !== e
          ? e
          : "Auto";
      }
      const r = (function () {
        const { activeSheet: i } = (0, o.nZ)(),
          t = (0, a.Fl)(() => {
            var t;
            return null === (t = i.value) || void 0 === t
              ? void 0
              : t.rootTopic.id;
          }),
          e = (0, a.Fl)(() => !(0, n.rs)().disableAnimation),
          r = (0, a.Fl)(
            () => !(0, n.Yh)().isStatusValid || (0, n.rs)().watermarkEnabled,
          ),
          d = (0, a.iH)(s(t.value)),
          c = (0, a.iH)(p(t.value)),
          m = (0, a.Fl)(() =>
            "zh-CN" === (0, n.S)().language ||
            "zh-CN" === (0, n.S)().defaultLanguage
              ? "zh"
              : "en",
          ),
          u = (i) => {
            (0, n.rs)().updateSettings({ disableAnimation: !i });
          },
          v = (i) => {
            (0, n.rs)().updateSettings({ watermarkEnabled: i });
          },
          x = (i) => {
            i !== p(t.value) &&
              ((0, l.nh)(t.value, { "slide-appearance": i }), (c.value = i));
          },
          f = (i) => {
            i !== s(t.value) &&
              ((0, l.nh)(t.value, { "slide-aspect-ratio": i }), (d.value = i));
          };
        return (
          (0, a.YP)(
            () => t.value,
            (i) => {
              (d.value = s(i)), (c.value = p(i));
            },
          ),
          () => ({
            animationEnabled: e,
            watermarkEnabled: r,
            slideTheme: (0, a.Fl)(() => c.value),
            slideAspect: (0, a.Fl)(() => d.value),
            preferredLanguage: m,
            updateAnimationSetting: u,
            updateWatermarkSetting: v,
            updateSlideThemeSetting: x,
            updateSlideAspectSetting: f,
          })
        );
      })();
    },
    94025: (i, t, e) => {
      "use strict";
      e.d(t, {
        CU: () => p,
        YN: () => s,
        ur: () => a.Slideshow,
        I2: () => a.SlideshowExporter,
        rc: () => v,
        qV: () => u,
        WS: () => m,
        bh: () => d,
        sz: () => r,
        _y: () => c,
        _p: () => a.previewSlidesScopedBy,
        IE: () => a.slideSizes,
        hf: () => x,
        tT: () => l,
      });
      var a = e(32118),
        n = e(24813);
      const o = {
        summarySlideVisibility: "summary-slide-visibility",
        topicSlideVisibility: "topic-slide-visibility",
        topicImagePlacement: "topic-slide-image-placement",
        listSlideVisibility: "list-slide-visibility",
        listSlideDelivery: "list-slide-delivery",
        listSlideLayout: "list-slide-layout",
      };
      function l() {
        const i = (i, t, e) => (0, n.nh)(i, { [o[t]]: e });
        return {
          getSlideOption: (i, t) => {
            var e;
            return null === (e = (0, n.pP)(i)) || void 0 === e
              ? void 0
              : e[o[t]];
          },
          setSlideOption: i,
          deleteSlideOption: (t, e) => i(t, e),
        };
      }
      const p = "org.xmind.ui.ice-cream-pancake",
        s = ["Auto", "16:9", "4:3", "9:16", "3:4"];
      function r(i) {
        return new a.Slideshow(i);
      }
      function d(i = {}) {
        const {
            initialSlide: t,
            perspectiveMode: e,
            viewStyle: n,
            contentStyle: o,
          } = i,
          l = new a.PresentationView({ initialSlide: t });
        return (
          e
            ? ((l.allowsActivatingPresenterPerspectiveMode = !0),
              (l.mode = "presenterPerspective"))
            : ((l.allowsActivatingPresenterPerspectiveMode = !1),
              (l.mode = "presentation")),
          n && Object.keys(n).forEach((i) => (l.el.style[i] = n[i])),
          o && Object.keys(o).forEach((i) => (l.contentEl.style[i] = o[i])),
          l
        );
      }
      function c(i, t, e) {
        return {
          topicSkipped: (0, a.isSlideSkippedScopedBy)(i, t, "topic", {
            ignoresUserValue: e,
          }),
          listSkipped: (0, a.isSlideSkippedScopedBy)(i, t, "list", {
            ignoresUserValue: e,
          }),
          summarySkipped: (0, a.isSlideSkippedScopedBy)(i, t, "summary", {
            ignoresUserValue: e,
          }),
        };
      }
      function m(i, t) {
        const e = (0, a.computeSlideContent)(
          t,
          i.contentProvider,
          i.defaultListSlideDelivery,
        );
        return e && e.topic.image
          ? (0, a.computeTopicSlideImagePlacement)(
              i.slideSize,
              e,
              e.topic.image,
              { ignoresUserValue: !0 },
            )
          : null;
      }
      function u(i, t) {
        return (0, a.computeSlideLayout)(
          "list",
          i.slideSize,
          i.getSlideContent(t),
        );
      }
      function v(i, t) {
        return (0, a.getEligibleSlideLayouts)("list", i.getSlideContent(t));
      }
      function x(i, t) {
        const e = i.getSlideContent(t.topicId).computedListSlideDelivery;
        let a = [];
        if (
          ("list" === t.type &&
            "all-at-once" === e &&
            (a = [...a, ...(t.subtopics || [])]),
          t.boxes)
        ) {
          const i = (e) => {
            for (const n of e) {
              if (
                (n.id.startsWith("topic:title:") ||
                  n.id.startsWith("topic:image:")) &&
                n.opacity
              ) {
                const i = n.id.split(":")[2];
                t.subtopics.includes(i) && a.push(n.id.split(":")[2]);
              }
              "children" in n && i(n.children);
            }
          };
          i(t.boxes);
        }
        const n = t.topicId,
          o = [...new Set(a)].filter((i) => i !== n);
        return { topicId: n, subTopicIds: o };
      }
    },
    7703: (i, t, e) => {
      "use strict";
      e.d(t, {
        yh: () => a.yh,
        Nn: () => f,
        c4: () => h,
        XT: () => b.XT,
        iA: () => b.iA,
        vN: () => g,
        dM: () => a.dM,
        HZ: () => C,
        Su: () => S,
        I6: () => a.I6,
        zF: () => a.zF,
        Y$: () => a.Y$,
        _x: () => b._x,
      });
      var a = e(92344),
        n = e(90435),
        o = e(2954),
        l = e(94025),
        p = e(54856),
        s = e(86633),
        r = function (i, t, e, a) {
          return new (e || (e = Promise))(function (n, o) {
            function l(i) {
              try {
                s(a.next(i));
              } catch (i) {
                o(i);
              }
            }
            function p(i) {
              try {
                s(a.throw(i));
              } catch (i) {
                o(i);
              }
            }
            function s(i) {
              var t;
              i.done
                ? n(i.value)
                : ((t = i.value),
                  t instanceof e
                    ? t
                    : new e(function (i) {
                        i(t);
                      })).then(l, p);
            }
            s((a = a.apply(i, t || [])).next());
          });
        };
      const d = (0, s.ZP)("pitchmode");
      class c {
        sendMessage(i, t) {
          return r(this, void 0, void 0, function* () {
            try {
              return yield n.ZP.fetch(p.OV.SUB_COMMAND(this.proxyId), {
                command: i,
                payload: t,
              });
            } catch (i) {
              return d.warn("SendMessage: ", i), i;
            }
          });
        }
        performTransition(i) {
          return r(this, void 0, void 0, function* () {
            yield this.sendMessage("performTransition", i);
          });
        }
        performStateChange(i, t) {
          return r(this, void 0, void 0, function* () {
            yield this.sendMessage("performStateChange", {
              state: i,
              animationOptions: t,
            });
          });
        }
        preloadTransition(i) {
          this.sendMessage("preloadTransition", i);
        }
        presentEndingScreen(i, t, e, a, n) {
          return r(this, void 0, void 0, function* () {
            this.sendMessage("presentEndingscreen", {
              content: i,
              slideSize: t,
              epilogueSlide: e,
              backgroundColor: a,
              options: n,
            });
          });
        }
        dismissEndingScreen(i) {
          return r(this, void 0, void 0, function* () {
            this.sendMessage("dismissEndingscreen", i);
          });
        }
        presentModalDisplay(i, t) {
          return r(this, void 0, void 0, function* () {
            this.sendMessage("presentModalDisplay", { options: i, boxId: t });
          });
        }
        dismissModalDisplay(i) {
          return r(this, void 0, void 0, function* () {
            this.sendMessage("dismissModalDisplay", { contentType: i });
          });
        }
        constructor(i) {
          this.proxyId = i;
        }
        unload() {}
      }
      var m = e(16704),
        u = function (i, t, e, a) {
          return new (e || (e = Promise))(function (n, o) {
            function l(i) {
              try {
                s(a.next(i));
              } catch (i) {
                o(i);
              }
            }
            function p(i) {
              try {
                s(a.throw(i));
              } catch (i) {
                o(i);
              }
            }
            function s(i) {
              var t;
              i.done
                ? n(i.value)
                : ((t = i.value),
                  t instanceof e
                    ? t
                    : new e(function (i) {
                        i(t);
                      })).then(l, p);
            }
            s((a = a.apply(i, t || [])).next());
          });
        };
      class v {
        constructor() {
          (this.ready = (0, o.iH)(!1)),
            (this.isProxiedPresenter = !1),
            (this._id = (0, m.hb)());
        }
        get id() {
          return this._id;
        }
        get isReady() {
          return this.ready.value;
        }
        setReady() {
          this.ready.value = !0;
        }
        init() {
          return u(this, void 0, void 0, function* () {});
        }
        stateChangedHandler() {}
        unload() {}
      }
      var x = function (i, t, e, a) {
        return new (e || (e = Promise))(function (n, o) {
          function l(i) {
            try {
              s(a.next(i));
            } catch (i) {
              o(i);
            }
          }
          function p(i) {
            try {
              s(a.throw(i));
            } catch (i) {
              o(i);
            }
          }
          function s(i) {
            var t;
            i.done
              ? n(i.value)
              : ((t = i.value),
                t instanceof e
                  ? t
                  : new e(function (i) {
                      i(t);
                    })).then(l, p);
          }
          s((a = a.apply(i, t || [])).next());
        });
      };
      class f extends v {
        constructor(i) {
          var t;
          super(),
            (this._containerEle = null),
            (this.presentationViewOptions = i.presentationViewOptions),
            (this.isShowingPerspective = (0, o.iH)(!1)),
            (this.isEnablePerspective = !!(null ===
              (t = i.presentationViewOptions) || void 0 === t
              ? void 0
              : t.perspectiveMode));
        }
        get view() {
          return this._presentationView;
        }
        get container() {
          return this._containerEle;
        }
        get viewEle() {
          return this._presentationView.el;
        }
        init() {
          return x(this, void 0, void 0, function* () {
            this.createPresentationView(this.presentationViewOptions),
              this.setReady();
          });
        }
        createPresentationView(i) {
          this._presentationView = (0, l.bh)({
            initialSlide: i.initialSlide,
            perspectiveMode: i.perspectiveMode,
            viewStyle: {
              left: "0",
              right: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "#000000",
            },
            contentStyle: { backgroundColor: "#000000" },
          });
        }
        update() {
          this._presentationView.update();
        }
        connect() {
          this._presentationView.connect();
        }
        stateChangedHandler() {
          this.isEnablePerspective &&
            (this.isShowingPerspective.value =
              "presenterPerspective" === this.view.mode);
        }
        setContainer(i) {
          this._containerEle ||
            ((this._containerEle = i),
            this._containerEle.appendChild(this.viewEle),
            this.update(),
            this.connect());
        }
        unload() {
          var i;
          null === (i = this._containerEle) ||
            void 0 === i ||
            i.removeChild(this.viewEle),
            (this._containerEle = null);
        }
      }
      class h extends v {
        constructor(i) {
          super(),
            (this.isProxy = !0),
            (this._unRoute = []),
            (this.presentationViewOptions = i.presentationViewOptions);
        }
        get view() {
          return this._proxyView;
        }
        init() {
          return x(this, void 0, void 0, function* () {
            return (
              this.createPresentationProxyView(this.id),
              yield this.connectProxiedPresenter()
            );
          });
        }
        createPresentationProxyView(i) {
          this._proxyView = new c(i);
        }
        connectProxiedPresenter() {
          const i = window.id;
          return (
            this._unRoute.push(
              n.ZP.route(
                p.OV.CONNECT_MAIN(i),
                () => (
                  setTimeout(() => {
                    this.setReady();
                  }, 50),
                  {
                    presentationViewOptions: this.presentationViewOptions,
                    proxyId: this.id,
                  }
                ),
              ),
            ),
            new Promise((i) => {
              const t = (0, o.YP)(
                () => this.ready.value,
                (e) => {
                  e && (i(), t());
                },
              );
            })
          );
        }
        unload() {
          this._unRoute.forEach((i) => i());
        }
      }
      class g extends f {
        constructor(i) {
          super({}), (this.isProxiedPresenter = !0), (this.remoteWindowId = i);
        }
        init() {
          return x(this, void 0, void 0, function* () {
            yield this.connectProxy(), this.setReady();
          });
        }
        connectProxy() {
          return x(this, void 0, void 0, function* () {
            const i = () =>
                x(this, void 0, void 0, function* () {
                  return (
                    (yield Promise.race([
                      n.ZP.fetch(p.OV.CONNECT_MAIN(this.remoteWindowId)),
                      new Promise((i) => setTimeout(i, 1e3)),
                    ])) || (yield i())
                  );
                }),
              t = yield i();
            var e, a;
            this.createPresentationView(t.presentationViewOptions),
              (e = this._presentationView),
              (a = t.proxyId),
              n.ZP.route(p.OV.SUB_COMMAND(a), (i) => {
                switch (i.command) {
                  case "performTransition":
                    return e.performTransition(i.payload);
                  case "performStateChange":
                    return e.performStateChange(
                      i.payload.state,
                      i.payload.animationOptions,
                    );
                  case "preloadTransition":
                    return e.preloadTransition(i.payload);
                  case "presentEndingscreen":
                    return e.presentEndingScreen(
                      i.payload.content,
                      i.payload.slideSize,
                      i.payload.epilogueSlide,
                      i.payload.backgroundColor,
                      i.payload.options,
                    );
                  case "dismissEndingscreen":
                    return e.dismissEndingScreen(i.payload);
                  case "presentModalDisplay":
                    return e.presentModalDisplay(
                      i.payload.options,
                      i.payload.boxId,
                    );
                  case "dismissModalDisplay":
                    return e.dismissModalDisplay(i.payload.contentType);
                }
              });
          });
        }
      }
      var b = e(28086),
        w = e(91324),
        y = e(38853);
      function C(i, t) {
        const e = (t) => {
          (function (i, t) {
            const e = (0, w.Ds)(i.slideControl, 100),
              { animationEnabled: a } = (0, y.Y)();
            switch (t.key) {
              case "PageDown":
              case "ArrowDown":
              case "Enter":
              case " ":
                return e({ action: "next" }), !0;
              case "ArrowRight":
                return (
                  t.shiftKey
                    ? e({ action: "fastForward" })
                    : e({ action: "next" }),
                  !0
                );
              case "PageUp":
              case "ArrowUp":
                return e({ action: "prev" }), !0;
              case "ArrowLeft":
                return (
                  t.shiftKey
                    ? e({ action: "fastBackward" })
                    : e({ action: "prev" }),
                  !0
                );
              case "Escape":
              case "q":
              case "Q":
                return i.finish(), !0;
              case "a":
              case "A":
                return i.switchAnimationOption(!a.value), !0;
            }
            return !1;
          })(i, t) && (t.preventDefault(), t.stopPropagation());
        };
        return (
          t.addEventListener("keydown", e),
          i.on("beforeUnload", () => {
            t.removeEventListener("keydown", e);
          }),
          i
        );
      }
      var F = e(50965);
      function S(i, t) {
        return (
          i.on("playWebVideo", ({ payload: i }) => {
            var e, a, n;
            const o =
                null !==
                  (a =
                    null === (e = null == t ? void 0 : t.subWindow) ||
                    void 0 === e
                      ? void 0
                      : e.getBounds()) && void 0 !== a
                  ? a
                  : null === (n = null == t ? void 0 : t.mainWindow) ||
                      void 0 === n
                    ? void 0
                    : n.getBounds(),
              l = o
                ? Object.assign(Object.assign({}, o), { fullscreen: !0 })
                : null;
            !(function (i) {
              const { handleCommand: t } = (0, F.JX)(),
                { videoSource: e, overrideSetting: a } = i;
              e && t("videoViewer", { url: e, overrideSetting: a });
            })({ videoSource: i.videoSource, overrideSetting: l });
          }),
          i
        );
      }
    },
    24813: (i, t, e) => {
      "use strict";
      e.d(t, {
        xm: () => v,
        pP: () => x,
        n2: () => m,
        d4: () => u,
        nh: () => f,
      });
      var a = e(2954),
        n = e(94025),
        o = e(70716),
        l = e(96160);
      const {
          TopicQuickStyleClassName: p,
          PrimaryClassName: s,
          TopicPrimaryClassName: r,
        } = l.viewerKit,
        d = Object.freeze({
          default: {
            [s.Map]: {
              fillColor: "#101010",
              multiLineColors: ["#F6F6F6"].join(" "),
            },
            [s.Relationship]: { lineColor: "#F6F6F6", textColor: "#FFFFFF" },
            [s.Boundary]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [s.Summary]: {},
            [r.CentralTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [r.MainTopic]: { fillColor: "#E3E3E3", textColor: "#000000" },
            [r.Subtopic]: { fillColor: "#B9B9B9", textColor: "#000000" },
            [r.FloatingTopic]: { fillColor: "#BABABA", textColor: "#000000" },
            [r.CalloutTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [r.SummaryTopic]: { fillColor: "#F6F6F6", textColor: "#000000" },
            [p.VeryImportant]: { fillColor: "#A43838" },
            [p.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [p.CrossOut]: {},
          },
          light: {
            [s.Map]: {
              fillColor: "#F4F4F4",
              multiLineColors: ["#282828"].join(" "),
            },
            [s.Relationship]: { lineColor: "#282828", textColor: "#000000" },
            [s.Boundary]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [s.Summary]: {},
            [r.CentralTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [r.MainTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [r.Subtopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [r.FloatingTopic]: { fillColor: "#4F4F4F", textColor: "#FFFFFF" },
            [r.CalloutTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [r.SummaryTopic]: { fillColor: "#282828", textColor: "#FFFFFF" },
            [p.VeryImportant]: { fillColor: "#A43838" },
            [p.Important]: { fillColor: "#CFA362", textColor: "#000000" },
            [p.CrossOut]: {},
          },
          Innocence: {
            [s.Map]: {
              fillColor: "#ECF4E9",
              multiLineColors: [
                "#FF9A9A",
                "#F9E168",
                "#FFC368",
                "#ACDB87",
                "#749AC7",
                "#FF9A9A",
              ].join(" "),
            },
            [s.Relationship]: { lineColor: "#F06767", textColor: "#F7FFF4" },
            [s.Boundary]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [s.Summary]: {},
            [r.CentralTopic]: { fillColor: "#F06767" },
            [r.MainTopic]: { textColor: "#000000" },
            [r.Subtopic]: { textColor: "#000000" },
            [r.FloatingTopic]: { fillColor: "#797979", textColor: "#F7FFF4" },
            [r.CalloutTopic]: { fillColor: "#F06767", textColor: "#F7FFF4" },
            [r.SummaryTopic]: { fillColor: "#F06767", textColor: "#000000" },
            [p.VeryImportant]: { fillColor: "#1000C6" },
            [p.Important]: { fillColor: "#22D896", textColor: "#000000" },
            [p.CrossOut]: {},
          },
          "Hubble-Bubble": {
            [s.Map]: { fillColor: "#1D663A", multiLineColors: "#A2B864" },
            [s.Relationship]: { lineColor: "#A2B864", textColor: "#FEFFD0" },
            [s.Boundary]: { fillColor: "#A2B864", textColor: "#FFFFFF" },
            [s.Summary]: {},
            [r.CentralTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [r.MainTopic]: { fillColor: "#39B169", textColor: "#FEFFD0" },
            [r.Subtopic]: { fillColor: "#2E9356", textColor: "#FEFFD0" },
            [r.FloatingTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [r.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#000000" },
            [r.SummaryTopic]: { fillColor: "#A2B864", textColor: "#1D663A" },
            [p.VeryImportant]: { fillColor: "#FA813D", textColor: "#000000" },
            [p.Important]: { fillColor: "#ECDE5D", textColor: "#000000" },
            [p.CrossOut]: {},
          },
          "midnight-rose": {
            [s.Map]: { fillColor: "#010518", multiLineColors: "#9EAEFF" },
            [s.Relationship]: { lineColor: "#2C47D8", textColor: "#FFFFFF" },
            [s.Boundary]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [s.Summary]: {},
            [r.CentralTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [r.MainTopic]: { fillColor: "#2C47D8", textColor: "#FFFFFF" },
            [r.Subtopic]: { fillColor: "#3E4C95", textColor: "#FFFFFF" },
            [r.FloatingTopic]: { fillColor: "#DEE3FF", textColor: "#404E9C" },
            [r.CalloutTopic]: { fillColor: "#FEFFD0", textColor: "#404E9C" },
            [r.SummaryTopic]: { fillColor: "#9EAEFF", textColor: "#404E9C" },
            [p.VeryImportant]: { fillColor: "#A716CB", textColor: "#000000" },
            [p.Important]: { fillColor: "#D45757", textColor: "#000000" },
            [p.CrossOut]: {},
          },
          "shape-for-you": {
            [s.Map]: {
              fillColor: "#F5D8DD",
              multiLineColors: [
                "#EDB998",
                "#BEADA6",
                "#E994B1",
                "#ACBCD6",
                "#B1ABD6",
                "#B0CD99",
                "#97D6C3",
                "#BDB783",
              ].join(" "),
            },
            [s.Relationship]: { lineColor: "#E59294", textColor: "#000000" },
            [s.Boundary]: { fillColor: "#E59294", textColor: "#FFFFFF" },
            [s.Summary]: {},
            [r.CentralTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [r.MainTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [r.Subtopic]: { fillColor: "#E59294", textColor: "#000000" },
            [r.FloatingTopic]: { fillColor: "#4B4B4B", textColor: "#FFFFFF" },
            [r.CalloutTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [r.SummaryTopic]: { fillColor: "#E59294", textColor: "#000000" },
            [p.VeryImportant]: { fillColor: "#50209E", textColor: "#000000" },
            [p.Important]: { fillColor: "#D45757", textColor: "#62A8CF" },
            [p.CrossOut]: {},
          },
          "hand-drawn": {
            [s.Map]: { fillColor: "#DCE2D4", multiLineColors: "#2F4DB5" },
            [s.Relationship]: { lineColor: "#2F4DB5", textColor: "#2F4DB5" },
            [s.Boundary]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [s.Summary]: {},
            [r.CentralTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [r.MainTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [r.Subtopic]: { fillColor: "#5E6AA2", textColor: "#FFFFFF" },
            [r.FloatingTopic]: { fillColor: "#5A5E74", textColor: "#EDF4E5" },
            [r.CalloutTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [r.SummaryTopic]: { fillColor: "#2F4DB5", textColor: "#FFFFFF" },
            [p.VeryImportant]: { fillColor: "#9433AC", textColor: "#FFFFFF" },
            [p.Important]: { fillColor: "#D05252", textColor: "#FFFFFF" },
            [p.CrossOut]: {},
          },
        });
      var c = function (i, t, e, a) {
        return new (e || (e = Promise))(function (n, o) {
          function l(i) {
            try {
              s(a.next(i));
            } catch (i) {
              o(i);
            }
          }
          function p(i) {
            try {
              s(a.throw(i));
            } catch (i) {
              o(i);
            }
          }
          function s(i) {
            var t;
            i.done
              ? n(i.value)
              : ((t = i.value),
                t instanceof e
                  ? t
                  : new e(function (i) {
                      i(t);
                    })).then(l, p);
          }
          s((a = a.apply(i, t || [])).next());
        });
      };
      function m(i) {
        const { sheets: t, activeSheetId: e, getSheetViewer: n } = (0, l.nZ)(),
          o = (0, a.Fl)(() =>
            t.value.find((t) => t.id === (null != i ? i : e.value)),
          ),
          p = (0, a.Fl)(() => n(o.value.id));
        return {
          getStartingTopicId: () => {
            var i, t, e;
            return null !==
              (e =
                null ===
                  (t =
                    null === (i = o.value) || void 0 === i
                      ? void 0
                      : i.rootTopic) || void 0 === t
                  ? void 0
                  : t.id) && void 0 !== e
              ? e
              : null;
          },
          getTopicAttributes: (i) => {
            var t, e, a, n, l, s, r, d, c, m, u;
            const v =
                null ===
                  (e =
                    null === (t = o.value) || void 0 === t
                      ? void 0
                      : t.query({ id: i })) || void 0 === e
                  ? void 0
                  : e.asTopic(),
              f =
                null ===
                  (n =
                    null === (a = p.value) || void 0 === a
                      ? void 0
                      : a.getSheetFigure()) || void 0 === n
                  ? void 0
                  : n.topicFigureByTopicId[i],
              C = x(i);
            return (
              v && {
                id: null == v ? void 0 : v.id,
                title:
                  null !== (l = null == v ? void 0 : v.title) && void 0 !== l
                    ? l
                    : "",
                labels:
                  null !== (s = null == v ? void 0 : v.labels) && void 0 !== s
                    ? s
                    : [],
                note: (null == v ? void 0 : v.notes) && {
                  plainText:
                    null === (r = v.notes) || void 0 === r ? void 0 : r.text,
                  html:
                    null === (d = v.notes) || void 0 === d ? void 0 : d.html,
                },
                image: g(f),
                summaries:
                  null === (c = null == v ? void 0 : v.summaries) ||
                  void 0 === c
                    ? void 0
                    : c.map((i) => ({
                        topicId: i.id,
                        startIndex: i.rangeStart,
                        endIndex: i.rangeEnd,
                      })),
                markers: h(
                  null !== (m = null == v ? void 0 : v.markers) && void 0 !== m
                    ? m
                    : [],
                ),
                video: b(f),
                calloutTopicId:
                  null === (u = null == v ? void 0 : v.callout) || void 0 === u
                    ? void 0
                    : u.id,
                hyperlink: w(v),
                topicSlide: null == C ? void 0 : C["topic-slide-visibility"],
                topicSlideImagePlacement:
                  null == C ? void 0 : C["topic-slide-image-placement"],
                listSlides: null == C ? void 0 : C["list-slide-visibility"],
                listSlideLayout: null == C ? void 0 : C["list-slide-layout"],
                listSlideDelivery:
                  null == C ? void 0 : C["list-slide-delivery"],
                summarySlide:
                  null == C ? void 0 : C["summary-slide-visibility"],
                preferredDefaultListSlideLayout: y(f),
              }
            );
          },
          getSubtopics: (i) => {
            var t, e, a, n;
            const l =
              null ===
                (e =
                  null === (t = o.value) || void 0 === t
                    ? void 0
                    : t.query({ id: i })) || void 0 === e
                ? void 0
                : e.asTopic();
            return null !==
              (n =
                null === (a = null == l ? void 0 : l.children) || void 0 === a
                  ? void 0
                  : a.map((i) => i.id)) && void 0 !== n
              ? n
              : [];
          },
          getParentTopicId: (i) => {
            var t, e, a, n;
            const l =
              null ===
                (e =
                  null === (t = o.value) || void 0 === t
                    ? void 0
                    : t.query({ id: i })) || void 0 === e
                ? void 0
                : e.asTopic();
            return null !==
              (n =
                null === (a = null == l ? void 0 : l.parentTopic) ||
                void 0 === a
                  ? void 0
                  : a.id) && void 0 !== n
              ? n
              : null;
          },
          getFloatingTopics: () => {
            var i, t, e;
            return null !==
              (e =
                null ===
                  (t =
                    null === (i = o.value) || void 0 === i
                      ? void 0
                      : i.rootTopic) || void 0 === t
                  ? void 0
                  : t.detachedChildren.map((i) => i.id)) && void 0 !== e
              ? e
              : [];
          },
          getEndingScreenContent: (i) =>
            c(this, void 0, void 0, function* () {
              var t, e, a, n, l, s, r, c;
              const m =
                  null !==
                    (l =
                      null !== (t = null == i ? void 0 : i.appearance) &&
                      void 0 !== t
                        ? t
                        : null ===
                              (n = x(
                                null ===
                                  (a =
                                    null === (e = o.value) || void 0 === e
                                      ? void 0
                                      : e.rootTopic) || void 0 === a
                                  ? void 0
                                  : a.id,
                              )) || void 0 === n
                          ? void 0
                          : n["slide-appearance"]) && void 0 !== l
                    ? l
                    : "default",
                { svg: u, size: v } =
                  yield p.value.exportSVGElementWithSizeUsingSheetAppearance(
                    o.value,
                    null !== (s = d[m]) && void 0 !== s ? s : d.default,
                    {
                      padding: { left: 20, right: 20, top: 20, bottom: 20 },
                      disableEmbedFonts: !0,
                    },
                  );
              return {
                svgString: new XMLSerializer().serializeToString(u),
                width:
                  null !== (r = v.width) && void 0 !== r
                    ? r
                    : parseInt(u.getAttribute("width")),
                height:
                  null !== (c = v.height) && void 0 !== c
                    ? c
                    : parseInt(u.getAttribute("height")),
              };
            }),
        };
      }
      function u() {
        return c(this, void 0, void 0, function* () {
          const i = m(),
            t = i.getStartingTopicId(),
            e = i.getFloatingTopics(),
            a = [t, ...e],
            n = (t) => {
              const e = t.map((t) => i.getSubtopics(t)).flat();
              a.push(...e), e.length <= 0 || n(e);
            };
          n(a);
          const o = {},
            l = {},
            p = {};
          a.forEach((t) => {
            (o[t] = i.getTopicAttributes(t)),
              (l[t] = i.getParentTopicId(t)),
              (p[t] = i.getSubtopics(t));
          });
          const s = yield i.getEndingScreenContent(void 0);
          return {
            startingTopicId: t,
            floatingTopicIds: e,
            topicRecords: o,
            parentRecords: l,
            subTopicsRecords: p,
            endingScreenContent: s,
          };
        });
      }
      function v(i) {
        const {
          startingTopicId: t,
          floatingTopicIds: e,
          topicRecords: a,
          subTopicsRecords: n,
          parentRecords: o,
          endingScreenContent: l,
        } = i;
        return {
          getStartingTopicId: () => t,
          getTopicAttributes: (i) => {
            var t;
            return null !== (t = a[i]) && void 0 !== t ? t : null;
          },
          getSubtopics: (i) => {
            var t;
            return null !== (t = n[i]) && void 0 !== t ? t : [];
          },
          getParentTopicId: (i) => {
            var t;
            return null !== (t = o[i]) && void 0 !== t ? t : null;
          },
          getFloatingTopics: () => e,
          getEndingScreenContent: () =>
            c(this, void 0, void 0, function* () {
              return l;
            }),
        };
      }
      function x(i) {
        var t, e, a;
        const { document: o } = (0, l.nZ)(),
          p =
            null ===
              (e =
                null === (t = o.value) || void 0 === t
                  ? void 0
                  : t.query({ id: i })) || void 0 === e
              ? void 0
              : e.asTopic(),
          s = null == p ? void 0 : p.extensionBy(n.CU);
        return null !== (a = null == s ? void 0 : s.content) && void 0 !== a
          ? a
          : null;
      }
      function f(i, t) {
        var e, a, o, p, s;
        const { document: r, changeDoc: d } = (0, l.nZ)(),
          c =
            null ===
              (a =
                null === (e = r.value) || void 0 === e
                  ? void 0
                  : e.query({ id: i })) || void 0 === a
              ? void 0
              : a.asTopic(),
          m =
            null !==
              (p =
                null === (o = null == c ? void 0 : c.extensionBy(n.CU)) ||
                void 0 === o
                  ? void 0
                  : o.content) && void 0 !== p
              ? p
              : {},
          u = { content: Object.assign(Object.assign({}, m), t) },
          v =
            null === (s = null == c ? void 0 : c.asMutable()) || void 0 === s
              ? void 0
              : s.extensionBy(n.CU, u).commit().ownerDocument;
        v && d(v);
      }
      function h(i) {
        const { markerModule: t } = (0, l.nZ)();
        return i
          .map((i) => ({
            markerId: i,
            imageSource: t.getMarkerInfoById(i).imageSrc,
          }))
          .filter((i) => !!i.imageSource);
      }
      function g(i) {
        var t, e, a, n, o;
        if (!i) return null;
        const {
            imageView: p,
            measuredImageView: s,
            imageNaturalSize: r,
          } = i.nodeContent,
          d = null == i ? void 0 : i.modelAttributes,
          c =
            null === (t = null == d ? void 0 : d.equation) || void 0 === t
              ? void 0
              : t.text;
        if (c)
          return (function (i) {
            var t, e;
            const a = (
              null !== (t = (0, l.nZ)().makeMathJaxSVG(i)) && void 0 !== t
                ? t
                : ""
            ).replace(/currentColor/g, "");
            if (!a) return null;
            const n =
              null ===
                (e = new DOMParser().parseFromString(a, "image/svg+xml")) ||
              void 0 === e
                ? void 0
                : e.documentElement;
            return n
              ? {
                  source: a,
                  size: {
                    width: parseInt(n.getAttribute("width")),
                    height: parseInt(n.getAttribute("height")),
                  },
                }
              : null;
          })(c);
        {
          const i =
              null !==
                (a =
                  null !== (e = null == r ? void 0 : r.width) && void 0 !== e
                    ? e
                    : null == s
                      ? void 0
                      : s.width) && void 0 !== a
                ? a
                : null == d
                  ? void 0
                  : d.imageWidth,
            t =
              null !==
                (o =
                  null !== (n = null == r ? void 0 : r.height) && void 0 !== n
                    ? n
                    : null == s
                      ? void 0
                      : s.height) && void 0 !== o
                ? o
                : null == d
                  ? void 0
                  : d.imageHeight,
            l = null == p ? void 0 : p.src;
          return i && t && l
            ? { source: l, size: { width: i, height: t } }
            : null;
        }
      }
      function b(i) {
        var t, e;
        const a =
          null ===
            (e =
              null === (t = null == i ? void 0 : i.modelAttributes) ||
              void 0 === t
                ? void 0
                : t.webVideo) || void 0 === e
            ? void 0
            : e.embedUrl;
        return a ? { videoSource: a } : null;
      }
      function w(i) {
        const t = null == i ? void 0 : i.href;
        if (!t) return null;
        const e =
          t &&
          (function (i) {
            return i.toLowerCase().startsWith("xap:resources")
              ? "attachment"
              : i.toLowerCase().startsWith("file:")
                ? "local"
                : i.toLowerCase().startsWith("xmind:")
                  ? null
                  : "webpage";
          })(t);
        return t && e ? { href: t, type: e } : null;
      }
      function y(i) {
        var t, e;
        const a =
          null !==
            (e =
              null === (t = null == i ? void 0 : i.modelAttributes) ||
              void 0 === t
                ? void 0
                : t.structureClass) && void 0 !== e
            ? e
            : null;
        return [o.v.FISHBONELEFTHEADED, o.v.FISHBONERIGHTHEADED].includes(a)
          ? "fishbone"
          : [
                o.v.TIMELINEHORIZONTAL,
                o.v.TIMELINESIDEDHORIZONTAL,
                o.v.TIMELINETHROUGHVERTICAL,
              ].includes(a)
            ? "timeline"
            : null;
      }
    },
    28086: (i, t, e) => {
      "use strict";
      e.d(t, { Ur: () => v, XT: () => c, _x: () => u, iA: () => m });
      var a = e(67657),
        n = e(90435),
        o = e(54856),
        l = e(82361),
        p = e(94025),
        s = e(91324),
        r = function (i, t, e, a) {
          return new (e || (e = Promise))(function (n, o) {
            function l(i) {
              try {
                s(a.next(i));
              } catch (i) {
                o(i);
              }
            }
            function p(i) {
              try {
                s(a.throw(i));
              } catch (i) {
                o(i);
              }
            }
            function s(i) {
              var t;
              i.done
                ? n(i.value)
                : ((t = i.value),
                  t instanceof e
                    ? t
                    : new e(function (i) {
                        i(t);
                      })).then(l, p);
            }
            s((a = a.apply(i, t || [])).next());
          });
        };
      const d = a.screen,
        c = {
          AFTER_SUB_WINDOW_CREATED: "pitch:afterSubWindowCreated",
          AFTER_SUB_WINDOW_REMOVED: "pitch:afterSubWindowRemoved",
          ON_DISPLAY_ADDED: "pitch:onDisplayAdded",
          ON_DISPLAY_REMOVED: "pitch:onDisplayRemoved",
          ON_MAIN_WINDOW_ENTER_FULLSCREEN: "pitch:onMainWindowEnterFullScreen",
          ON_MAIN_WINDOW_LEAVE_FULLSCREEN: "pitch:onMainWindowLeaveFullScreen",
        };
      class m extends l.EventEmitter {
        constructor() {
          super(),
            (this.mainWindowId = window.id),
            (this.subWindowId = null),
            (this.subWindowDisplayId = null),
            (this.win = a.getCurrentWindow()),
            (this._windowFittedSlideSize = {}),
            (this.onDisplayAdded = () =>
              r(this, void 0, void 0, function* () {
                yield new Promise((i) => setTimeout(i, 1e3)),
                  this.emit(c.ON_DISPLAY_ADDED);
              })),
            (this.onDisplayRemoved = () => {
              d
                .getAllDisplays()
                .map((i) => i.id)
                .includes(this.subWindowDisplayId) || this.closeSubWindow(),
                this.emit(c.ON_DISPLAY_REMOVED);
            }),
            (this.onMainWindowEnterFullScreen = () => {
              this.emit(c.ON_MAIN_WINDOW_ENTER_FULLSCREEN);
            }),
            (this.onMainWindowLeaveFullScreen = () => {
              this.emit(c.ON_MAIN_WINDOW_LEAVE_FULLSCREEN);
            }),
            d.on("display-added", this.onDisplayAdded),
            d.on("display-removed", this.onDisplayRemoved),
            this.win.on("enter-full-screen", this.onMainWindowEnterFullScreen),
            this.win.on("leave-full-screen", this.onMainWindowLeaveFullScreen);
        }
        get subWindowCreated() {
          return null !== this.subWindowId;
        }
        get mainWindow() {
          return this.win;
        }
        get subWindow() {
          var i;
          return (
            this.subWindowId &&
            (null === (i = a.BrowserWindow) || void 0 === i
              ? void 0
              : i.fromId(this.subWindowId))
          );
        }
        get windowFittedSlideSize() {
          var i, t, e;
          const a =
            null !==
              (e =
                null ===
                  (t =
                    null === (i = this.subWindow) || void 0 === i
                      ? void 0
                      : i.getContentSize) || void 0 === t
                  ? void 0
                  : t.call(i)) && void 0 !== e
              ? e
              : this.win.getContentSize();
          return (
            (this._windowFittedSlideSize.value = v(a)),
            this._windowFittedSlideSize
          );
        }
        createSubWindow() {
          var i;
          return r(this, void 0, void 0, function* () {
            if (this.subWindowCreated) return !1;
            const t = this.getSubWindowDisplay();
            if (!t) return !1;
            const e = yield n.ZP.fetch(o.Fx, {
              name: "presentation",
              query: { remoteId: this.mainWindowId },
              backgroundThrottling: !1,
              overrideSetting: {
                x: t.bounds.x,
                y: t.bounds.y,
                fullscreen: !0,
                focusable: !1,
                backgroundColor: "#000000",
              },
            });
            return (
              (this.subWindowDisplayId = t.id),
              (this.subWindowId = e.id),
              null === (i = this.subWindow) ||
                void 0 === i ||
                i.on("focus", () => this.focusMainWindow()),
              this.emit(c.AFTER_SUB_WINDOW_CREATED, this.subWindowId),
              !0
            );
          });
        }
        getSubWindowDisplay() {
          const i = d.getDisplayMatching(a.getCurrentWindow().getBounds());
          return d.getAllDisplays().filter((t) => t.id !== i.id)[0] || null;
        }
        closeSubWindow() {
          var i;
          this.subWindowId &&
            (null === (i = this.subWindow) || void 0 === i || i.close(),
            (this.subWindowId = null),
            (this.subWindowDisplayId = null),
            this.emit(c.AFTER_SUB_WINDOW_REMOVED));
        }
        enterFullscreen(i) {
          return r(this, void 0, void 0, function* () {
            return yield n.ZP.fetch(o.IB, {
              fullscreen: !0,
              editorViewId: window.editorId,
              targetElementId: i,
            });
          });
        }
        leaveFullscreen(i) {
          return r(this, void 0, void 0, function* () {
            return yield n.ZP.fetch(o.IB, {
              fullscreen: !1,
              editorViewId: window.editorId,
              targetElementId: i,
            });
          });
        }
        focusMainWindow() {
          var i;
          null === (i = this.win) || void 0 === i || i.focus();
        }
        unload() {
          d.removeListener("display-added", this.onDisplayAdded),
            d.removeListener("display-removed", this.onDisplayRemoved),
            this.win.removeListener(
              "enter-full-screen",
              this.onMainWindowEnterFullScreen,
            ),
            this.win.removeListener(
              "leave-full-screen",
              this.onMainWindowLeaveFullScreen,
            ),
            this.closeSubWindow();
        }
      }
      function u(i) {
        i || (i = a.getCurrentWindow());
        return {
          lockAspect: (t) => {
            if (!t) {
              const { width: e, height: a } = i.getBounds();
              t = e / a;
            }
            i.setAspectRatio(t);
          },
          releaseAspect: () => i.setAspectRatio(0),
          setMinimumSize: (t, e) => i.setMinimumSize(t, e),
          setBounds: (t) => i.setBounds(t),
          smoothOnResize: (t) => {
            i.on(
              "resize",
              (0, s.P2)(() => window.requestAnimationFrame(t), 1e3 / 60),
            );
          },
          closeWindow: () => i.close(),
          onWindowClose: (t) => i.on("close", t),
          computeSuitableWindowSize: x,
          computeSuitableSlideSizeIdFromWindowSize: v,
        };
      }
      function v(i) {
        i || (i = a.getCurrentWindow().getContentSize());
        const t = i[0] / i[1];
        let e = "16:9",
          n = 1 / 0;
        for (const i of Object.keys(p.IE)) {
          if (!/\d+:\d+/.test(i)) continue;
          const a = i.split(":").map((i) => Number(i)),
            o = Math.abs(a[0] / a[1] - t);
          o < n && ((n = o), (e = i));
        }
        return e;
      }
      function x(i) {
        const t = h().bounds,
          e = (i) => i.width + 80 < t.width && i.height + 80 < t.height;
        let a = f(
          (function () {
            const i = h();
            if (!i) return "16:9";
            const t = i.bounds,
              e = t.width / t.height;
            let a = "16:9",
              n = 1 / 0;
            for (const i of Object.keys(p.IE)) {
              if (!/\d+:\d+/.test(i)) continue;
              const t = i.split(":").map((i) => Number(i)),
                o = Math.abs(t[0] / t[1] - e);
              o < n && ((n = o), (a = i));
            }
            return a;
          })(),
        );
        const n = {
          width: 1280,
          height: Math.floor(1280 / a),
          x: 0,
          y: 0,
          minWidth: 360,
          minHeight: 360,
        };
        if (
          ("Auto" !== i &&
            ((a = f(i)),
            (n.height = Math.floor(n.width / a)),
            a < 1
              ? (n.minHeight = Math.floor(n.minWidth / a))
              : (n.minWidth = Math.floor(n.minHeight * a))),
          !e(n))
        )
          for (const i of [960, 640, 360])
            if (((n.width = i), (n.height = Math.floor(i / a)), e(n))) break;
        return (
          (n.x = Math.floor(t.x + (t.width - n.width) / 2)),
          (n.y = Math.floor(t.y + (t.height - n.height) / 2)),
          n
        );
      }
      function f(i) {
        const t = i.split(":").map((i) => Number(i));
        return t[0] / t[1];
      }
      function h() {
        const i = a.screen,
          t = a.getCurrentWindow().getBounds();
        return i.getDisplayMatching(t);
      }
    },
    52339: (i, t, e) => {
      "use strict";
      e.d(t, { Z: () => o });
      var a = e(2954);
      const n = (0, a.aZ)({
        __name: "pitch-container",
        props: {
          presenter: null,
          isShowingMask: { type: Boolean },
          fadeIn: { type: Boolean },
        },
        emits: ["maskClicked"],
        setup(i, { emit: t }) {
          const e = i,
            n = (0, a.iH)();
          return (
            (0, a.bv)(() => {
              var i;
              null === (i = e.presenter) ||
                void 0 === i ||
                i.setContainer(n.value),
                e.fadeIn &&
                  ((n.value.style.opacity = "0"),
                  setTimeout(() => {
                    n.value && (n.value.style.opacity = "1");
                  }, 300));
            }),
            { __sfc: !0, props: e, emit: t, presentationContainer: n }
          );
        },
      });
      e(43488);
      const o = (0, e(51900).Z)(
        n,
        function () {
          var i = this,
            t = i._self._c,
            e = i._self._setupProxy;
          return t(
            "div",
            {
              ref: "presentationContainer",
              staticClass: "presentation-container",
            },
            [
              i.isShowingMask
                ? t("div", {
                    staticClass: "mask",
                    on: {
                      click: function (i) {
                        return e.emit("maskClicked");
                      },
                    },
                  })
                : i._e(),
            ],
          );
        },
        [],
        !1,
        null,
        "54c5b1d2",
        null,
      ).exports;
    },
    43488: (i, t, e) => {
      var a = e(9342);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[i.id, a, ""]]),
        a.locals && (i.exports = a.locals);
      (0, e(45346).Z)("66079e86", a, !0, {});
    },
    79285: (i, t, e) => {
      var a = e(48183);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[i.id, a, ""]]),
        a.locals && (i.exports = a.locals);
      (0, e(45346).Z)("3faa74d0", a, !0, {});
    },
    45346: (i, t, e) => {
      "use strict";
      function a(i, t) {
        for (var e = [], a = {}, n = 0; n < t.length; n++) {
          var o = t[n],
            l = o[0],
            p = { id: i + ":" + n, css: o[1], media: o[2], sourceMap: o[3] };
          a[l] ? a[l].parts.push(p) : e.push((a[l] = { id: l, parts: [p] }));
        }
        return e;
      }
      e.d(t, { Z: () => v });
      var n = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !n)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      var o = {},
        l = n && (document.head || document.getElementsByTagName("head")[0]),
        p = null,
        s = 0,
        r = !1,
        d = function () {},
        c = null,
        m = "data-vue-ssr-id",
        u =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function v(i, t, e, n) {
        (r = e), (c = n || {});
        var l = a(i, t);
        return (
          x(l),
          function (t) {
            for (var e = [], n = 0; n < l.length; n++) {
              var p = l[n];
              (s = o[p.id]).refs--, e.push(s);
            }
            t ? x((l = a(i, t))) : (l = []);
            for (n = 0; n < e.length; n++) {
              var s;
              if (0 === (s = e[n]).refs) {
                for (var r = 0; r < s.parts.length; r++) s.parts[r]();
                delete o[s.id];
              }
            }
          }
        );
      }
      function x(i) {
        for (var t = 0; t < i.length; t++) {
          var e = i[t],
            a = o[e.id];
          if (a) {
            a.refs++;
            for (var n = 0; n < a.parts.length; n++) a.parts[n](e.parts[n]);
            for (; n < e.parts.length; n++) a.parts.push(h(e.parts[n]));
            a.parts.length > e.parts.length &&
              (a.parts.length = e.parts.length);
          } else {
            var l = [];
            for (n = 0; n < e.parts.length; n++) l.push(h(e.parts[n]));
            o[e.id] = { id: e.id, refs: 1, parts: l };
          }
        }
      }
      function f() {
        var i = document.createElement("style");
        return (i.type = "text/css"), l.appendChild(i), i;
      }
      function h(i) {
        var t,
          e,
          a = document.querySelector("style[" + m + '~="' + i.id + '"]');
        if (a) {
          if (r) return d;
          a.parentNode.removeChild(a);
        }
        if (u) {
          var n = s++;
          (a = p || (p = f())),
            (t = w.bind(null, a, n, !1)),
            (e = w.bind(null, a, n, !0));
        } else
          (a = f()),
            (t = y.bind(null, a)),
            (e = function () {
              a.parentNode.removeChild(a);
            });
        return (
          t(i),
          function (a) {
            if (a) {
              if (
                a.css === i.css &&
                a.media === i.media &&
                a.sourceMap === i.sourceMap
              )
                return;
              t((i = a));
            } else e();
          }
        );
      }
      var g,
        b =
          ((g = []),
          function (i, t) {
            return (g[i] = t), g.filter(Boolean).join("\n");
          });
      function w(i, t, e, a) {
        var n = e ? "" : a.css;
        if (i.styleSheet) i.styleSheet.cssText = b(t, n);
        else {
          var o = document.createTextNode(n),
            l = i.childNodes;
          l[t] && i.removeChild(l[t]),
            l.length ? i.insertBefore(o, l[t]) : i.appendChild(o);
        }
      }
      function y(i, t) {
        var e = t.css,
          a = t.media,
          n = t.sourceMap;
        if (
          (a && i.setAttribute("media", a),
          c.ssrId && i.setAttribute(m, t.id),
          n &&
            ((e += "\n/*# sourceURL=" + n.sources[0] + " */"),
            (e +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
              " */")),
          i.styleSheet)
        )
          i.styleSheet.cssText = e;
        else {
          for (; i.firstChild; ) i.removeChild(i.firstChild);
          i.appendChild(document.createTextNode(e));
        }
      }
    },
    6113: (i) => {
      "use strict";
      i.exports = require("crypto");
    },
    72298: (i) => {
      "use strict";
      i.exports = require("electron");
    },
    82361: (i) => {
      "use strict";
      i.exports = require("events");
    },
    57147: (i) => {
      "use strict";
      i.exports = require("fs");
    },
    22037: (i) => {
      "use strict";
      i.exports = require("os");
    },
    71017: (i) => {
      "use strict";
      i.exports = require("path");
    },
    63477: (i) => {
      "use strict";
      i.exports = require("querystring");
    },
    57310: (i) => {
      "use strict";
      i.exports = require("url");
    },
    73837: (i) => {
      "use strict";
      i.exports = require("util");
    },
  },
  (i) => {
    i.O(0, [2768, 6486, 2118, 219, 1505], () => {
      return (t = 44799), i((i.s = t));
      var t;
    });
    var t = i.O();
    module.exports = t;
  },
]);
