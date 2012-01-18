﻿window.getExampleData = function () {
    var arr = ko.observableArray([
                { 'Sku': ko.observable('C-2820164'), 'Vendor': 'NEWB', 'SeasonCode': '542', 'Mfg_Id': ko.observable('573-9880954'), 'UPC': '822860449228' },
    { 'Sku': ko.observable('J-8555462'), 'Vendor': 'NIKE', 'SeasonCode': '3935', 'Mfg_Id': ko.observable('780-8855467'), 'UPC': '043208523549' },
    { 'Sku': ko.observable('K-5312708'), 'Vendor': 'REEB', 'SeasonCode': '1293', 'Mfg_Id': ko.observable('355-6906843'), 'UPC': '229487568922' },
    { 'Sku': ko.observable('W-4295255'), 'Vendor': 'REEB', 'SeasonCode': '6283', 'Mfg_Id': ko.observable('861-4929378'), 'UPC': '644134774391' },
    { 'Sku': ko.observable('X-9829445'), 'Vendor': 'DOCK', 'SeasonCode': '6670', 'Mfg_Id': ko.observable('298-5235913'), 'UPC': '872941679110' },
    { 'Sku': ko.observable('H-2415929'), 'Vendor': 'REEB', 'SeasonCode': '3884', 'Mfg_Id': ko.observable('615-8231520'), 'UPC': '310547300561' },
    { 'Sku': ko.observable('X-2718366'), 'Vendor': 'MERR', 'SeasonCode': '4054', 'Mfg_Id': ko.observable('920-2961971'), 'UPC': '157891269493' },
    { 'Sku': ko.observable('Q-1505237'), 'Vendor': 'AX', 'SeasonCode': '9145', 'Mfg_Id': ko.observable('371-6918101'), 'UPC': '553657492213' },
    { 'Sku': ko.observable('M-1626429'), 'Vendor': 'REEB', 'SeasonCode': '1846', 'Mfg_Id': ko.observable('242-5856618'), 'UPC': '029388467459' },
    { 'Sku': ko.observable('Y-1914652'), 'Vendor': 'LEVI', 'SeasonCode': '5553', 'Mfg_Id': ko.observable('80-9194110'), 'UPC': '433360049369' },
    { 'Sku': ko.observable('F-8091957'), 'Vendor': 'REEB', 'SeasonCode': '8146', 'Mfg_Id': ko.observable('312-4814421'), 'UPC': '062310473417' },
    { 'Sku': ko.observable('E-3907768'), 'Vendor': 'HARR', 'SeasonCode': '4259', 'Mfg_Id': ko.observable('756-901863'), 'UPC': '361864227909' },
    { 'Sku': ko.observable('W-7161135'), 'Vendor': 'NEWB', 'SeasonCode': '6438', 'Mfg_Id': ko.observable('846-8566633'), 'UPC': '722583768810' },
    { 'Sku': ko.observable('L-5970493'), 'Vendor': 'NIKE', 'SeasonCode': '2379', 'Mfg_Id': ko.observable('878-2477758'), 'UPC': '636305130410' },
    { 'Sku': ko.observable('H-8096791'), 'Vendor': 'LEVI', 'SeasonCode': '8842', 'Mfg_Id': ko.observable('558-2974511'), 'UPC': '155189345441' },
    { 'Sku': ko.observable('I-5912919'), 'Vendor': 'SPIN', 'SeasonCode': '4774', 'Mfg_Id': ko.observable('856-9799338'), 'UPC': '479383499849' },
    { 'Sku': ko.observable('Q-6829455'), 'Vendor': 'LEVI', 'SeasonCode': '623', 'Mfg_Id': ko.observable('194-9593517'), 'UPC': '061707327161' },
    { 'Sku': ko.observable('W-2924765'), 'Vendor': 'NIKE', 'SeasonCode': '7113', 'Mfg_Id': ko.observable('171-8285192'), 'UPC': '427818830049' },
    { 'Sku': ko.observable('O-7619050'), 'Vendor': 'MERR', 'SeasonCode': '3670', 'Mfg_Id': ko.observable('568-4729357'), 'UPC': '269715940593' },
    { 'Sku': ko.observable('U-3730668'), 'Vendor': 'NIKE', 'SeasonCode': '7893', 'Mfg_Id': ko.observable('934-6527869'), 'UPC': '436858561684' },
    { 'Sku': ko.observable('O-5454810'), 'Vendor': 'SPIN', 'SeasonCode': '5921', 'Mfg_Id': ko.observable('328-2261878'), 'UPC': '759892508938' },
    { 'Sku': ko.observable('X-9007529'), 'Vendor': 'DOCK', 'SeasonCode': '8124', 'Mfg_Id': ko.observable('748-9171274'), 'UPC': '286212987355' },
    { 'Sku': ko.observable('L-7079327'), 'Vendor': 'LEVI', 'SeasonCode': '3410', 'Mfg_Id': ko.observable('867-6819348'), 'UPC': '630309618683' },
    { 'Sku': ko.observable('Q-5852442'), 'Vendor': 'HARR', 'SeasonCode': '4861', 'Mfg_Id': ko.observable('741-7257502'), 'UPC': '511949883653' },
    { 'Sku': ko.observable('D-6525673'), 'Vendor': 'NEWB', 'SeasonCode': '9346', 'Mfg_Id': ko.observable('75-1298000'), 'UPC': '760096645391' },
    { 'Sku': ko.observable('U-6860714'), 'Vendor': 'NEWB', 'SeasonCode': '312', 'Mfg_Id': ko.observable('825-3854531'), 'UPC': '156808749042' },
    { 'Sku': ko.observable('K-4038961'), 'Vendor': 'SPERR', 'SeasonCode': '549', 'Mfg_Id': ko.observable('5-7288537'), 'UPC': '223210858367' },
    { 'Sku': ko.observable('C-5511775'), 'Vendor': 'SPERR', 'SeasonCode': '8687', 'Mfg_Id': ko.observable('536-160382'), 'UPC': '555057527816' },
    { 'Sku': ko.observable('F-5275385'), 'Vendor': 'NIKE', 'SeasonCode': '6406', 'Mfg_Id': ko.observable('580-4586478'), 'UPC': '212380501363' },
    { 'Sku': ko.observable('U-1165537'), 'Vendor': 'AX', 'SeasonCode': '6587', 'Mfg_Id': ko.observable('646-5081144'), 'UPC': '712809136390' },
    { 'Sku': ko.observable('F-1903671'), 'Vendor': 'REEB', 'SeasonCode': '4953', 'Mfg_Id': ko.observable('552-2294480'), 'UPC': '481999580041' },
    { 'Sku': ko.observable('T-6848107'), 'Vendor': 'HARR', 'SeasonCode': '8504', 'Mfg_Id': ko.observable('741-372186'), 'UPC': '287205516528' },
    { 'Sku': ko.observable('R-4781081'), 'Vendor': 'SPIN', 'SeasonCode': '145', 'Mfg_Id': ko.observable('866-8150932'), 'UPC': '489091341717' },
    { 'Sku': ko.observable('A-3144391'), 'Vendor': 'REEB', 'SeasonCode': '1025', 'Mfg_Id': ko.observable('850-995118'), 'UPC': '730846512540' },
    { 'Sku': ko.observable('F-7502325'), 'Vendor': 'NEWB', 'SeasonCode': '5153', 'Mfg_Id': ko.observable('334-592537'), 'UPC': '363979479311' },
    { 'Sku': ko.observable('G-1768514'), 'Vendor': 'NEWB', 'SeasonCode': '4903', 'Mfg_Id': ko.observable('271-7867739'), 'UPC': '456712691872' },
    { 'Sku': ko.observable('V-6027425'), 'Vendor': 'SPIN', 'SeasonCode': '5445', 'Mfg_Id': ko.observable('716-1272645'), 'UPC': '823841104058' },
    { 'Sku': ko.observable('R-5900303'), 'Vendor': 'MERR', 'SeasonCode': '9138', 'Mfg_Id': ko.observable('316-8246625'), 'UPC': '567179893032' },
    { 'Sku': ko.observable('Y-5811262'), 'Vendor': 'SPIN', 'SeasonCode': '6726', 'Mfg_Id': ko.observable('130-1301811'), 'UPC': '095558941330' },
    { 'Sku': ko.observable('T-3256674'), 'Vendor': 'DOCK', 'SeasonCode': '4642', 'Mfg_Id': ko.observable('980-6854744'), 'UPC': '859497750230' },
    { 'Sku': ko.observable('Y-4012714'), 'Vendor': 'REEB', 'SeasonCode': '5503', 'Mfg_Id': ko.observable('703-4664878'), 'UPC': '016911290001' },
    { 'Sku': ko.observable('B-9394265'), 'Vendor': 'AX', 'SeasonCode': '733', 'Mfg_Id': ko.observable('972-7681149'), 'UPC': '841193942851' },
    { 'Sku': ko.observable('Z-5530033'), 'Vendor': 'NIKE', 'SeasonCode': '5730', 'Mfg_Id': ko.observable('100-1068226'), 'UPC': '528061818358' },
    { 'Sku': ko.observable('X-6565975'), 'Vendor': 'SPERR', 'SeasonCode': '2959', 'Mfg_Id': ko.observable('315-9094817'), 'UPC': '298143985322' },
    { 'Sku': ko.observable('Z-341035'), 'Vendor': 'NIKE', 'SeasonCode': '1409', 'Mfg_Id': ko.observable('418-2525224'), 'UPC': '146156828898' },
    { 'Sku': ko.observable('P-737011'), 'Vendor': 'SPERR', 'SeasonCode': '5683', 'Mfg_Id': ko.observable('232-7423541'), 'UPC': '754066951166' },
    { 'Sku': ko.observable('K-227350'), 'Vendor': 'HARR', 'SeasonCode': '9664', 'Mfg_Id': ko.observable('235-4951815'), 'UPC': '824811524935' },
    { 'Sku': ko.observable('H-3512511'), 'Vendor': 'LEVI', 'SeasonCode': '912', 'Mfg_Id': ko.observable('220-7244910'), 'UPC': '569114913124' },
    { 'Sku': ko.observable('M-6276953'), 'Vendor': 'NIKE', 'SeasonCode': '2054', 'Mfg_Id': ko.observable('170-8030063'), 'UPC': '735748088917' },
    { 'Sku': ko.observable('C-2528737'), 'Vendor': 'REEB', 'SeasonCode': '8687', 'Mfg_Id': ko.observable('314-7639211'), 'UPC': '167603736379' },
    { 'Sku': ko.observable('D-4943413'), 'Vendor': 'MERR', 'SeasonCode': '8185', 'Mfg_Id': ko.observable('765-972378'), 'UPC': '036248627027' },
    { 'Sku': ko.observable('X-2690822'), 'Vendor': 'REEB', 'SeasonCode': '2141', 'Mfg_Id': ko.observable('258-6749995'), 'UPC': '362554239278' },
    { 'Sku': ko.observable('S-8070040'), 'Vendor': 'SPERR', 'SeasonCode': '6864', 'Mfg_Id': ko.observable('687-6201223'), 'UPC': '445914337991' },
    { 'Sku': ko.observable('G-7415685'), 'Vendor': 'LEVI', 'SeasonCode': '1729', 'Mfg_Id': ko.observable('396-6964746'), 'UPC': '533437758596' },
    { 'Sku': ko.observable('M-1479640'), 'Vendor': 'HARR', 'SeasonCode': '6527', 'Mfg_Id': ko.observable('118-6588576'), 'UPC': '447864183288' },
    { 'Sku': ko.observable('D-9916309'), 'Vendor': 'REEB', 'SeasonCode': '416', 'Mfg_Id': ko.observable('530-3569383'), 'UPC': '142722470477' },
    { 'Sku': ko.observable('A-8084803'), 'Vendor': 'LEVI', 'SeasonCode': '5430', 'Mfg_Id': ko.observable('302-9898238'), 'UPC': '666660466557' },
    { 'Sku': ko.observable('X-9640901'), 'Vendor': 'NEWB', 'SeasonCode': '7424', 'Mfg_Id': ko.observable('401-618938'), 'UPC': '758743254981' },
    { 'Sku': ko.observable('N-4157748'), 'Vendor': 'SPERR', 'SeasonCode': '6511', 'Mfg_Id': ko.observable('176-7187486'), 'UPC': '148783597192' },
    { 'Sku': ko.observable('C-6799702'), 'Vendor': 'NIKE', 'SeasonCode': '8762', 'Mfg_Id': ko.observable('233-3226646'), 'UPC': '653953304741' },
    { 'Sku': ko.observable('Q-3793846'), 'Vendor': 'SPERR', 'SeasonCode': '4515', 'Mfg_Id': ko.observable('497-4471313'), 'UPC': '326802309650' },
    { 'Sku': ko.observable('L-8122568'), 'Vendor': 'NIKE', 'SeasonCode': '9386', 'Mfg_Id': ko.observable('26-8984752'), 'UPC': '636746765285' },
    { 'Sku': ko.observable('N-5349581'), 'Vendor': 'SPIN', 'SeasonCode': '9390', 'Mfg_Id': ko.observable('26-3673260'), 'UPC': '263290285733' },
    { 'Sku': ko.observable('Q-1373801'), 'Vendor': 'MERR', 'SeasonCode': '6645', 'Mfg_Id': ko.observable('964-4903174'), 'UPC': '397090351725' },
    { 'Sku': ko.observable('K-1111628'), 'Vendor': 'HARR', 'SeasonCode': '7627', 'Mfg_Id': ko.observable('505-6745559'), 'UPC': '632455684760' },
    { 'Sku': ko.observable('L-7860902'), 'Vendor': 'LEVI', 'SeasonCode': '4096', 'Mfg_Id': ko.observable('235-4839489'), 'UPC': '592306006024' },
    { 'Sku': ko.observable('H-1183128'), 'Vendor': 'LEVI', 'SeasonCode': '5718', 'Mfg_Id': ko.observable('567-2291471'), 'UPC': '512851043473' },
    { 'Sku': ko.observable('F-4881732'), 'Vendor': 'SPERR', 'SeasonCode': '4709', 'Mfg_Id': ko.observable('214-408924'), 'UPC': '573715080934' },
    { 'Sku': ko.observable('M-5277053'), 'Vendor': 'NEWB', 'SeasonCode': '1806', 'Mfg_Id': ko.observable('560-7839173'), 'UPC': '355262686832' },
    { 'Sku': ko.observable('B-2008921'), 'Vendor': 'NEWB', 'SeasonCode': '794', 'Mfg_Id': ko.observable('665-2623241'), 'UPC': '796804783700' },
    { 'Sku': ko.observable('K-3312909'), 'Vendor': 'NEWB', 'SeasonCode': '8436', 'Mfg_Id': ko.observable('393-6475371'), 'UPC': '366577609108' },
    { 'Sku': ko.observable('C-6236965'), 'Vendor': 'MERR', 'SeasonCode': '6141', 'Mfg_Id': ko.observable('381-4592226'), 'UPC': '394292361974' },
    { 'Sku': ko.observable('L-9289622'), 'Vendor': 'NIKE', 'SeasonCode': '9212', 'Mfg_Id': ko.observable('525-8665421'), 'UPC': '232882051771' },
    { 'Sku': ko.observable('U-6621193'), 'Vendor': 'LEVI', 'SeasonCode': '8308', 'Mfg_Id': ko.observable('632-9713739'), 'UPC': '458257595374' },
    { 'Sku': ko.observable('Y-9657219'), 'Vendor': 'SPIN', 'SeasonCode': '7251', 'Mfg_Id': ko.observable('153-2147115'), 'UPC': '790784571428' },
    { 'Sku': ko.observable('Y-9640678'), 'Vendor': 'AX', 'SeasonCode': '3479', 'Mfg_Id': ko.observable('793-4037235'), 'UPC': '464614319023' },
    { 'Sku': ko.observable('P-6378431'), 'Vendor': 'NEWB', 'SeasonCode': '3281', 'Mfg_Id': ko.observable('192-363084'), 'UPC': '665582680573' },
    { 'Sku': ko.observable('E-4391749'), 'Vendor': 'NIKE', 'SeasonCode': '4352', 'Mfg_Id': ko.observable('724-5172429'), 'UPC': '513943734510' },
    { 'Sku': ko.observable('G-2083402'), 'Vendor': 'LEVI', 'SeasonCode': '4918', 'Mfg_Id': ko.observable('769-1216613'), 'UPC': '415292210334' },
    { 'Sku': ko.observable('B-9046307'), 'Vendor': 'DOCK', 'SeasonCode': '924', 'Mfg_Id': ko.observable('925-8002355'), 'UPC': '356042939348' },
    { 'Sku': ko.observable('M-6545412'), 'Vendor': 'MERR', 'SeasonCode': '7465', 'Mfg_Id': ko.observable('381-4664357'), 'UPC': '242953636101' },
    { 'Sku': ko.observable('V-3421787'), 'Vendor': 'SPIN', 'SeasonCode': '2149', 'Mfg_Id': ko.observable('120-1640861'), 'UPC': '862811183948' },
    { 'Sku': ko.observable('X-1607022'), 'Vendor': 'HARR', 'SeasonCode': '3172', 'Mfg_Id': ko.observable('337-1013484'), 'UPC': '236253232212' },
    { 'Sku': ko.observable('J-8157455'), 'Vendor': 'NIKE', 'SeasonCode': '7412', 'Mfg_Id': ko.observable('741-1436733'), 'UPC': '152988010953' },
    { 'Sku': ko.observable('S-5706991'), 'Vendor': 'AX', 'SeasonCode': '3712', 'Mfg_Id': ko.observable('128-8076358'), 'UPC': '384933646938' },
    { 'Sku': ko.observable('Y-4139559'), 'Vendor': 'NIKE', 'SeasonCode': '4770', 'Mfg_Id': ko.observable('753-6928905'), 'UPC': '411256557923' },
    { 'Sku': ko.observable('O-7167569'), 'Vendor': 'SPIN', 'SeasonCode': '7011', 'Mfg_Id': ko.observable('984-9443812'), 'UPC': '679257052234' },
    { 'Sku': ko.observable('U-9189499'), 'Vendor': 'LEVI', 'SeasonCode': '6936', 'Mfg_Id': ko.observable('79-983098'), 'UPC': '446536374714' },
    { 'Sku': ko.observable('K-6229194'), 'Vendor': 'REEB', 'SeasonCode': '4329', 'Mfg_Id': ko.observable('569-6201170'), 'UPC': '665437603012' },
    { 'Sku': ko.observable('G-2271641'), 'Vendor': 'DOCK', 'SeasonCode': '1729', 'Mfg_Id': ko.observable('983-2697979'), 'UPC': '391960653873' },
    { 'Sku': ko.observable('U-6024830'), 'Vendor': 'AX', 'SeasonCode': '5159', 'Mfg_Id': ko.observable('651-5292135'), 'UPC': '199454927522' },
    { 'Sku': ko.observable('T-1984181'), 'Vendor': 'DOCK', 'SeasonCode': '425', 'Mfg_Id': ko.observable('627-9194742'), 'UPC': '287928602455' },
    { 'Sku': ko.observable('K-7864221'), 'Vendor': 'SPERR', 'SeasonCode': '1011', 'Mfg_Id': ko.observable('200-7159384'), 'UPC': '895038071087' },
    { 'Sku': ko.observable('O-3870420'), 'Vendor': 'AX', 'SeasonCode': '4260', 'Mfg_Id': ko.observable('290-127241'), 'UPC': '495761734291' },
    { 'Sku': ko.observable('I-450315'), 'Vendor': 'SPERR', 'SeasonCode': '4320', 'Mfg_Id': ko.observable('299-8474262'), 'UPC': '467608190685' },
    { 'Sku': ko.observable('T-3693084'), 'Vendor': 'LEVI', 'SeasonCode': '5999', 'Mfg_Id': ko.observable('149-6042930'), 'UPC': '159137166573' },
    { 'Sku': ko.observable('S-2137483'), 'Vendor': 'SPERR', 'SeasonCode': '5888', 'Mfg_Id': ko.observable('191-3101716'), 'UPC': '799360553749' },
    { 'Sku': ko.observable('H-9002907'), 'Vendor': 'DOCK', 'SeasonCode': '7535', 'Mfg_Id': ko.observable('253-4816568'), 'UPC': '325795625040' },
    { 'Sku': ko.observable('K-9490776'), 'Vendor': 'NIKE', 'SeasonCode': '1456', 'Mfg_Id': ko.observable('145-3455198'), 'UPC': '371368110621' },
    { 'Sku': ko.observable('V-1839526'), 'Vendor': 'SPIN', 'SeasonCode': '7758', 'Mfg_Id': ko.observable('145-4347698'), 'UPC': '656686963295' },
    { 'Sku': ko.observable('D-1198341'), 'Vendor': 'DOCK', 'SeasonCode': '2894', 'Mfg_Id': ko.observable('743-133040'), 'UPC': '582111020820' },
    { 'Sku': ko.observable('Y-924912'), 'Vendor': 'AX', 'SeasonCode': '2788', 'Mfg_Id': ko.observable('170-196268'), 'UPC': '563666000198' },
    { 'Sku': ko.observable('I-1101810'), 'Vendor': 'NIKE', 'SeasonCode': '4460', 'Mfg_Id': ko.observable('720-4668462'), 'UPC': '228475249723' },
    { 'Sku': ko.observable('W-1737581'), 'Vendor': 'AX', 'SeasonCode': '7306', 'Mfg_Id': ko.observable('817-165312'), 'UPC': '779549277203' },
    { 'Sku': ko.observable('U-6264907'), 'Vendor': 'REEB', 'SeasonCode': '3062', 'Mfg_Id': ko.observable('186-7128107'), 'UPC': '869350427361' },
    { 'Sku': ko.observable('X-8618754'), 'Vendor': 'SPERR', 'SeasonCode': '5943', 'Mfg_Id': ko.observable('900-8689382'), 'UPC': '247404925219' },
    { 'Sku': ko.observable('E-9713195'), 'Vendor': 'MERR', 'SeasonCode': '7422', 'Mfg_Id': ko.observable('319-5897561'), 'UPC': '134472055966' },
    { 'Sku': ko.observable('U-4574188'), 'Vendor': 'HARR', 'SeasonCode': '147', 'Mfg_Id': ko.observable('711-3670414'), 'UPC': '059821536421' },
    { 'Sku': ko.observable('N-6991833'), 'Vendor': 'HARR', 'SeasonCode': '3887', 'Mfg_Id': ko.observable('974-6237796'), 'UPC': '141986792419' },
    { 'Sku': ko.observable('K-423048'), 'Vendor': 'NIKE', 'SeasonCode': '3541', 'Mfg_Id': ko.observable('482-6603105'), 'UPC': '264358033292' },
    { 'Sku': ko.observable('U-852511'), 'Vendor': 'MERR', 'SeasonCode': '6383', 'Mfg_Id': ko.observable('202-7861514'), 'UPC': '617692684047' },
    { 'Sku': ko.observable('E-3255374'), 'Vendor': 'AX', 'SeasonCode': '4703', 'Mfg_Id': ko.observable('448-6010781'), 'UPC': '046106503394' },
    { 'Sku': ko.observable('R-7363661'), 'Vendor': 'SPERR', 'SeasonCode': '5896', 'Mfg_Id': ko.observable('9-1292750'), 'UPC': '017297775561' },
    { 'Sku': ko.observable('G-802189'), 'Vendor': 'MERR', 'SeasonCode': '9768', 'Mfg_Id': ko.observable('247-2810806'), 'UPC': '423377185797' },
    { 'Sku': ko.observable('U-6218491'), 'Vendor': 'SPIN', 'SeasonCode': '9704', 'Mfg_Id': ko.observable('560-7836781'), 'UPC': '823415824813' },
    { 'Sku': ko.observable('T-3948387'), 'Vendor': 'SPIN', 'SeasonCode': '9236', 'Mfg_Id': ko.observable('159-4824787'), 'UPC': '472697190107' },
    { 'Sku': ko.observable('Q-8492688'), 'Vendor': 'NIKE', 'SeasonCode': '9548', 'Mfg_Id': ko.observable('7-6669469'), 'UPC': '738249492308' },
    { 'Sku': ko.observable('G-2057483'), 'Vendor': 'LEVI', 'SeasonCode': '339', 'Mfg_Id': ko.observable('158-9836531'), 'UPC': '737387289642' },
    { 'Sku': ko.observable('I-2171121'), 'Vendor': 'NEWB', 'SeasonCode': '46', 'Mfg_Id': ko.observable('157-6121437'), 'UPC': '457444887700' },
    { 'Sku': ko.observable('G-2889953'), 'Vendor': 'MERR', 'SeasonCode': '4580', 'Mfg_Id': ko.observable('871-9254097'), 'UPC': '716252217803' },
    { 'Sku': ko.observable('P-1192671'), 'Vendor': 'NIKE', 'SeasonCode': '1923', 'Mfg_Id': ko.observable('605-7354690'), 'UPC': '711680242543' },
    { 'Sku': ko.observable('M-9920402'), 'Vendor': 'SPERR', 'SeasonCode': '626', 'Mfg_Id': ko.observable('378-57212'), 'UPC': '529928421509' },
    { 'Sku': ko.observable('C-8527346'), 'Vendor': 'SPIN', 'SeasonCode': '6903', 'Mfg_Id': ko.observable('137-9849869'), 'UPC': '829579281307' },
    { 'Sku': ko.observable('X-1178513'), 'Vendor': 'SPERR', 'SeasonCode': '5289', 'Mfg_Id': ko.observable('299-9642015'), 'UPC': '348287852385' },
    { 'Sku': ko.observable('P-3804821'), 'Vendor': 'LEVI', 'SeasonCode': '1700', 'Mfg_Id': ko.observable('251-1133083'), 'UPC': '144447046734' },
    { 'Sku': ko.observable('W-9160883'), 'Vendor': 'SPIN', 'SeasonCode': '2053', 'Mfg_Id': ko.observable('411-8990041'), 'UPC': '836072601101' },
    { 'Sku': ko.observable('R-6108006'), 'Vendor': 'REEB', 'SeasonCode': '1917', 'Mfg_Id': ko.observable('310-9639251'), 'UPC': '496705351130' },
    { 'Sku': ko.observable('K-3355100'), 'Vendor': 'NEWB', 'SeasonCode': '4948', 'Mfg_Id': ko.observable('216-5290136'), 'UPC': '282516094931' },
    { 'Sku': ko.observable('L-1846726'), 'Vendor': 'REEB', 'SeasonCode': '2648', 'Mfg_Id': ko.observable('26-5639673'), 'UPC': '173859633475' },
    { 'Sku': ko.observable('Y-3763647'), 'Vendor': 'AX', 'SeasonCode': '9420', 'Mfg_Id': ko.observable('704-8515119'), 'UPC': '750003654831' },
    { 'Sku': ko.observable('O-4912410'), 'Vendor': 'AX', 'SeasonCode': '5013', 'Mfg_Id': ko.observable('550-9505620'), 'UPC': '893919879716' },
    { 'Sku': ko.observable('Z-8546924'), 'Vendor': 'NEWB', 'SeasonCode': '3648', 'Mfg_Id': ko.observable('217-3764093'), 'UPC': '315872988514' },
    { 'Sku': ko.observable('R-5342089'), 'Vendor': 'HARR', 'SeasonCode': '8843', 'Mfg_Id': ko.observable('406-2810453'), 'UPC': '684510734242' },
    { 'Sku': ko.observable('A-9465317'), 'Vendor': 'DOCK', 'SeasonCode': '6068', 'Mfg_Id': ko.observable('721-3342978'), 'UPC': '238016234376' },
    { 'Sku': ko.observable('A-586943'), 'Vendor': 'DOCK', 'SeasonCode': '5184', 'Mfg_Id': ko.observable('518-391825'), 'UPC': '722367807910' },
    { 'Sku': ko.observable('Y-1509081'), 'Vendor': 'AX', 'SeasonCode': '4412', 'Mfg_Id': ko.observable('675-3031230'), 'UPC': '528453552696' },
    { 'Sku': ko.observable('W-6195086'), 'Vendor': 'SPIN', 'SeasonCode': '9612', 'Mfg_Id': ko.observable('348-2234550'), 'UPC': '572454351342' },
    { 'Sku': ko.observable('R-900052'), 'Vendor': 'SPIN', 'SeasonCode': '2533', 'Mfg_Id': ko.observable('547-454235'), 'UPC': '546555483884' },
    { 'Sku': ko.observable('B-6333773'), 'Vendor': 'MERR', 'SeasonCode': '9700', 'Mfg_Id': ko.observable('763-865826'), 'UPC': '573753553666' },
    { 'Sku': ko.observable('T-7117414'), 'Vendor': 'SPERR', 'SeasonCode': '7164', 'Mfg_Id': ko.observable('647-6442889'), 'UPC': '296724584103' },
    { 'Sku': ko.observable('D-2034954'), 'Vendor': 'HARR', 'SeasonCode': '7784', 'Mfg_Id': ko.observable('306-4460428'), 'UPC': '894660545608' },
    { 'Sku': ko.observable('W-565036'), 'Vendor': 'SPERR', 'SeasonCode': '5942', 'Mfg_Id': ko.observable('744-4250110'), 'UPC': '729928005526' },
    { 'Sku': ko.observable('P-5629086'), 'Vendor': 'NEWB', 'SeasonCode': '7062', 'Mfg_Id': ko.observable('515-9504593'), 'UPC': '147556316519' },
    { 'Sku': ko.observable('F-440806'), 'Vendor': 'DOCK', 'SeasonCode': '1950', 'Mfg_Id': ko.observable('133-8159760'), 'UPC': '383715382619' },
    { 'Sku': ko.observable('N-333366'), 'Vendor': 'DOCK', 'SeasonCode': '2633', 'Mfg_Id': ko.observable('194-6926383'), 'UPC': '158296488243' },
    { 'Sku': ko.observable('J-2457820'), 'Vendor': 'AX', 'SeasonCode': '7134', 'Mfg_Id': ko.observable('544-5875453'), 'UPC': '886473284509' },
    { 'Sku': ko.observable('G-8413892'), 'Vendor': 'REEB', 'SeasonCode': '7457', 'Mfg_Id': ko.observable('580-4648665'), 'UPC': '260067074947' },
    { 'Sku': ko.observable('C-9941747'), 'Vendor': 'HARR', 'SeasonCode': '4958', 'Mfg_Id': ko.observable('107-4820976'), 'UPC': '674878512522' },
    { 'Sku': ko.observable('G-987154'), 'Vendor': 'NIKE', 'SeasonCode': '5349', 'Mfg_Id': ko.observable('87-7712651'), 'UPC': '461996397749' },
    { 'Sku': ko.observable('N-5013250'), 'Vendor': 'NIKE', 'SeasonCode': '3539', 'Mfg_Id': ko.observable('90-1286148'), 'UPC': '027864415346' },
    { 'Sku': ko.observable('R-2907096'), 'Vendor': 'HARR', 'SeasonCode': '9930', 'Mfg_Id': ko.observable('190-8439514'), 'UPC': '114452086234' },
    { 'Sku': ko.observable('P-4076940'), 'Vendor': 'AX', 'SeasonCode': '2886', 'Mfg_Id': ko.observable('146-8010611'), 'UPC': '899136252845' },
    { 'Sku': ko.observable('Z-4613086'), 'Vendor': 'LEVI', 'SeasonCode': '749', 'Mfg_Id': ko.observable('496-8922581'), 'UPC': '387729579659' },
    { 'Sku': ko.observable('T-3059019'), 'Vendor': 'REEB', 'SeasonCode': '6208', 'Mfg_Id': ko.observable('74-8558952'), 'UPC': '211228618398' },
    { 'Sku': ko.observable('P-5910912'), 'Vendor': 'DOCK', 'SeasonCode': '3831', 'Mfg_Id': ko.observable('640-9746596'), 'UPC': '061003330463' },
    { 'Sku': ko.observable('X-470338'), 'Vendor': 'AX', 'SeasonCode': '1812', 'Mfg_Id': ko.observable('910-4108102'), 'UPC': '246686961505' },
    { 'Sku': ko.observable('M-9307530'), 'Vendor': 'AX', 'SeasonCode': '9577', 'Mfg_Id': ko.observable('470-9177359'), 'UPC': '894528260413' },
    { 'Sku': ko.observable('T-9771348'), 'Vendor': 'AX', 'SeasonCode': '5929', 'Mfg_Id': ko.observable('949-3054433'), 'UPC': '853263241889' },
    { 'Sku': ko.observable('L-316428'), 'Vendor': 'SPERR', 'SeasonCode': '2917', 'Mfg_Id': ko.observable('328-2905716'), 'UPC': '739728955726' },
    { 'Sku': ko.observable('H-617189'), 'Vendor': 'NIKE', 'SeasonCode': '2191', 'Mfg_Id': ko.observable('988-5471472'), 'UPC': '526142388972' },
    { 'Sku': ko.observable('R-2072825'), 'Vendor': 'REEB', 'SeasonCode': '1452', 'Mfg_Id': ko.observable('157-7212428'), 'UPC': '510767741090' },
    { 'Sku': ko.observable('M-8690840'), 'Vendor': 'NEWB', 'SeasonCode': '6526', 'Mfg_Id': ko.observable('246-5388884'), 'UPC': '445147139777' },
    { 'Sku': ko.observable('D-4117601'), 'Vendor': 'SPERR', 'SeasonCode': '4638', 'Mfg_Id': ko.observable('67-2217111'), 'UPC': '897200949578' },
    { 'Sku': ko.observable('P-5984522'), 'Vendor': 'SPIN', 'SeasonCode': '8055', 'Mfg_Id': ko.observable('336-4312576'), 'UPC': '465651898506' },
    { 'Sku': ko.observable('B-7016451'), 'Vendor': 'AX', 'SeasonCode': '4337', 'Mfg_Id': ko.observable('928-3512194'), 'UPC': '545800146069' },
    { 'Sku': ko.observable('P-1501221'), 'Vendor': 'NEWB', 'SeasonCode': '8766', 'Mfg_Id': ko.observable('322-1542234'), 'UPC': '890092143184' },
    { 'Sku': ko.observable('W-979864'), 'Vendor': 'DOCK', 'SeasonCode': '7771', 'Mfg_Id': ko.observable('539-7274168'), 'UPC': '225082662173' },
    { 'Sku': ko.observable('F-9194601'), 'Vendor': 'REEB', 'SeasonCode': '7477', 'Mfg_Id': ko.observable('619-2758434'), 'UPC': '647765903207' },
    { 'Sku': ko.observable('N-6579430'), 'Vendor': 'LEVI', 'SeasonCode': '5388', 'Mfg_Id': ko.observable('843-6800911'), 'UPC': '224737324301' },
    { 'Sku': ko.observable('R-6777264'), 'Vendor': 'REEB', 'SeasonCode': '6517', 'Mfg_Id': ko.observable('697-1920460'), 'UPC': '554324765675' },
    { 'Sku': ko.observable('N-5826499'), 'Vendor': 'HARR', 'SeasonCode': '561', 'Mfg_Id': ko.observable('94-5723024'), 'UPC': '332259256217' },
    { 'Sku': ko.observable('C-1920508'), 'Vendor': 'HARR', 'SeasonCode': '2164', 'Mfg_Id': ko.observable('594-1924847'), 'UPC': '151059044759' },
    { 'Sku': ko.observable('A-9874625'), 'Vendor': 'AX', 'SeasonCode': '3736', 'Mfg_Id': ko.observable('277-2448091'), 'UPC': '822125124011' },
    { 'Sku': ko.observable('I-5411491'), 'Vendor': 'REEB', 'SeasonCode': '275', 'Mfg_Id': ko.observable('562-3714294'), 'UPC': '453199091486' },
    { 'Sku': ko.observable('E-265903'), 'Vendor': 'MERR', 'SeasonCode': '4764', 'Mfg_Id': ko.observable('122-6358744'), 'UPC': '250105471512' },
    { 'Sku': ko.observable('W-5887667'), 'Vendor': 'MERR', 'SeasonCode': '4274', 'Mfg_Id': ko.observable('222-2841653'), 'UPC': '426957195198' },
    { 'Sku': ko.observable('S-5054239'), 'Vendor': 'SPIN', 'SeasonCode': '6257', 'Mfg_Id': ko.observable('677-7998082'), 'UPC': '724485968391' },
    { 'Sku': ko.observable('A-9691223'), 'Vendor': 'REEB', 'SeasonCode': '3909', 'Mfg_Id': ko.observable('260-8684260'), 'UPC': '481921223458' },
    { 'Sku': ko.observable('T-5816965'), 'Vendor': 'MERR', 'SeasonCode': '1886', 'Mfg_Id': ko.observable('104-2373924'), 'UPC': '766595470856' },
    { 'Sku': ko.observable('M-2053955'), 'Vendor': 'SPERR', 'SeasonCode': '6195', 'Mfg_Id': ko.observable('3-9738513'), 'UPC': '212714831870' },
    { 'Sku': ko.observable('L-2709156'), 'Vendor': 'SPERR', 'SeasonCode': '8002', 'Mfg_Id': ko.observable('651-3306335'), 'UPC': '710950367445' },
    { 'Sku': ko.observable('P-1544338'), 'Vendor': 'MERR', 'SeasonCode': '4053', 'Mfg_Id': ko.observable('529-1737994'), 'UPC': '451327781394' },
    { 'Sku': ko.observable('F-5901468'), 'Vendor': 'SPERR', 'SeasonCode': '8503', 'Mfg_Id': ko.observable('112-4201602'), 'UPC': '661375743614' },
    { 'Sku': ko.observable('T-3055301'), 'Vendor': 'MERR', 'SeasonCode': '9852', 'Mfg_Id': ko.observable('319-8154307'), 'UPC': '146435147812' },
    { 'Sku': ko.observable('A-6414378'), 'Vendor': 'LEVI', 'SeasonCode': '4596', 'Mfg_Id': ko.observable('3-8753218'), 'UPC': '074736628136' },
    { 'Sku': ko.observable('Q-2614199'), 'Vendor': 'NEWB', 'SeasonCode': '9740', 'Mfg_Id': ko.observable('180-2631300'), 'UPC': '832935200504' },
    { 'Sku': ko.observable('U-6972978'), 'Vendor': 'NEWB', 'SeasonCode': '3008', 'Mfg_Id': ko.observable('668-2087278'), 'UPC': '412679879266' },
    { 'Sku': ko.observable('E-9953282'), 'Vendor': 'HARR', 'SeasonCode': '9213', 'Mfg_Id': ko.observable('538-291264'), 'UPC': '652340714056' },
    { 'Sku': ko.observable('I-9445265'), 'Vendor': 'DOCK', 'SeasonCode': '5000', 'Mfg_Id': ko.observable('983-2885398'), 'UPC': '029855895586' },
    { 'Sku': ko.observable('C-4505697'), 'Vendor': 'HARR', 'SeasonCode': '3047', 'Mfg_Id': ko.observable('4-5708550'), 'UPC': '111346088685' },
    { 'Sku': ko.observable('B-5153625'), 'Vendor': 'SPIN', 'SeasonCode': '175', 'Mfg_Id': ko.observable('641-7497427'), 'UPC': '012805464228' },
    { 'Sku': ko.observable('K-2741966'), 'Vendor': 'SPIN', 'SeasonCode': '2276', 'Mfg_Id': ko.observable('135-6915121'), 'UPC': '467947341618' },
    { 'Sku': ko.observable('N-1996140'), 'Vendor': 'LEVI', 'SeasonCode': '9104', 'Mfg_Id': ko.observable('235-8940255'), 'UPC': '377406554635' },
    { 'Sku': ko.observable('Z-724407'), 'Vendor': 'NEWB', 'SeasonCode': '1639', 'Mfg_Id': ko.observable('620-3003883'), 'UPC': '555900075528' },
    { 'Sku': ko.observable('V-6504885'), 'Vendor': 'DOCK', 'SeasonCode': '1848', 'Mfg_Id': ko.observable('719-3266866'), 'UPC': '627325589350' },
    { 'Sku': ko.observable('T-1801214'), 'Vendor': 'SPERR', 'SeasonCode': '8435', 'Mfg_Id': ko.observable('693-9972896'), 'UPC': '691281119900' },
    { 'Sku': ko.observable('F-4704664'), 'Vendor': 'HARR', 'SeasonCode': '8565', 'Mfg_Id': ko.observable('281-4322274'), 'UPC': '714417482825' },
    { 'Sku': ko.observable('R-2623933'), 'Vendor': 'HARR', 'SeasonCode': '3407', 'Mfg_Id': ko.observable('206-9165545'), 'UPC': '675548305219' },
    { 'Sku': ko.observable('U-1279948'), 'Vendor': 'HARR', 'SeasonCode': '281', 'Mfg_Id': ko.observable('922-8523658'), 'UPC': '684116139021' },
    { 'Sku': ko.observable('N-3754832'), 'Vendor': 'NIKE', 'SeasonCode': '2019', 'Mfg_Id': ko.observable('544-2390986'), 'UPC': '147790452921' },
    { 'Sku': ko.observable('E-610257'), 'Vendor': 'MERR', 'SeasonCode': '1791', 'Mfg_Id': ko.observable('986-1693769'), 'UPC': '510415056598' },
    { 'Sku': ko.observable('O-6999858'), 'Vendor': 'HARR', 'SeasonCode': '7268', 'Mfg_Id': ko.observable('982-5815560'), 'UPC': '394341040689' },
    { 'Sku': ko.observable('C-2825101'), 'Vendor': 'DOCK', 'SeasonCode': '8501', 'Mfg_Id': ko.observable('256-5250661'), 'UPC': '290985464019' },
    { 'Sku': ko.observable('N-1744681'), 'Vendor': 'LEVI', 'SeasonCode': '2310', 'Mfg_Id': ko.observable('542-6485816'), 'UPC': '360050579197' },
    { 'Sku': ko.observable('X-6237301'), 'Vendor': 'AX', 'SeasonCode': '7680', 'Mfg_Id': ko.observable('623-2643526'), 'UPC': '479819232718' },
    { 'Sku': ko.observable('G-9568252'), 'Vendor': 'AX', 'SeasonCode': '4031', 'Mfg_Id': ko.observable('986-9542134'), 'UPC': '629352006388' },
    { 'Sku': ko.observable('U-4131246'), 'Vendor': 'NIKE', 'SeasonCode': '8144', 'Mfg_Id': ko.observable('139-8174081'), 'UPC': '013145648745' },
    { 'Sku': ko.observable('N-2759330'), 'Vendor': 'LEVI', 'SeasonCode': '8588', 'Mfg_Id': ko.observable('378-7245554'), 'UPC': '374554989694' },
    { 'Sku': ko.observable('E-3954015'), 'Vendor': 'SPIN', 'SeasonCode': '4262', 'Mfg_Id': ko.observable('556-1571212'), 'UPC': '044141172302' },
    { 'Sku': ko.observable('P-8530230'), 'Vendor': 'DOCK', 'SeasonCode': '9850', 'Mfg_Id': ko.observable('60-5031863'), 'UPC': '155210693954' },
    { 'Sku': ko.observable('J-949841'), 'Vendor': 'SPIN', 'SeasonCode': '9986', 'Mfg_Id': ko.observable('750-2366962'), 'UPC': '772403257589' },
    { 'Sku': ko.observable('I-2932678'), 'Vendor': 'AX', 'SeasonCode': '3196', 'Mfg_Id': ko.observable('176-4165733'), 'UPC': '666223761213' },
    { 'Sku': ko.observable('U-5814519'), 'Vendor': 'DOCK', 'SeasonCode': '9340', 'Mfg_Id': ko.observable('857-4855032'), 'UPC': '261024008040' },
    { 'Sku': ko.observable('B-2141551'), 'Vendor': 'DOCK', 'SeasonCode': '7419', 'Mfg_Id': ko.observable('400-3814262'), 'UPC': '278532513708' },
    { 'Sku': ko.observable('D-7482696'), 'Vendor': 'NIKE', 'SeasonCode': '2969', 'Mfg_Id': ko.observable('969-8152495'), 'UPC': '755830708336' },
    { 'Sku': ko.observable('F-3403531'), 'Vendor': 'NEWB', 'SeasonCode': '8331', 'Mfg_Id': ko.observable('820-2420488'), 'UPC': '198006058622' },
    { 'Sku': ko.observable('A-9334781'), 'Vendor': 'NEWB', 'SeasonCode': '8743', 'Mfg_Id': ko.observable('904-1077597'), 'UPC': '292925859349' },
    { 'Sku': ko.observable('C-4579141'), 'Vendor': 'NEWB', 'SeasonCode': '5360', 'Mfg_Id': ko.observable('846-5804009'), 'UPC': '113052173404' },
    { 'Sku': ko.observable('F-205376'), 'Vendor': 'LEVI', 'SeasonCode': '3858', 'Mfg_Id': ko.observable('297-919809'), 'UPC': '372393370854' },
    { 'Sku': ko.observable('F-2847255'), 'Vendor': 'REEB', 'SeasonCode': '1224', 'Mfg_Id': ko.observable('195-5261208'), 'UPC': '024789033012' },
    { 'Sku': ko.observable('S-1920469'), 'Vendor': 'SPIN', 'SeasonCode': '8345', 'Mfg_Id': ko.observable('82-7537992'), 'UPC': '419297557363' },
    { 'Sku': ko.observable('S-1520226'), 'Vendor': 'NEWB', 'SeasonCode': '1678', 'Mfg_Id': ko.observable('946-7653037'), 'UPC': '015126358665' },
    { 'Sku': ko.observable('U-1571899'), 'Vendor': 'SPIN', 'SeasonCode': '7837', 'Mfg_Id': ko.observable('111-2516387'), 'UPC': '129780160947' },
    { 'Sku': ko.observable('V-9810664'), 'Vendor': 'DOCK', 'SeasonCode': '6608', 'Mfg_Id': ko.observable('707-3906862'), 'UPC': '443561835672' },
    { 'Sku': ko.observable('S-2655662'), 'Vendor': 'NIKE', 'SeasonCode': '6483', 'Mfg_Id': ko.observable('210-4347745'), 'UPC': '615706039833' },
    { 'Sku': ko.observable('G-7827785'), 'Vendor': 'SPIN', 'SeasonCode': '3732', 'Mfg_Id': ko.observable('32-4171785'), 'UPC': '314236307640' },
    { 'Sku': ko.observable('G-665907'), 'Vendor': 'NEWB', 'SeasonCode': '4648', 'Mfg_Id': ko.observable('446-1250034'), 'UPC': '795944668562' },
    { 'Sku': ko.observable('N-2656389'), 'Vendor': 'LEVI', 'SeasonCode': '5387', 'Mfg_Id': ko.observable('516-7436330'), 'UPC': '540295218322' },
    { 'Sku': ko.observable('S-9824287'), 'Vendor': 'DOCK', 'SeasonCode': '1427', 'Mfg_Id': ko.observable('96-3292787'), 'UPC': '575089261244' },
    { 'Sku': ko.observable('A-821383'), 'Vendor': 'SPIN', 'SeasonCode': '8569', 'Mfg_Id': ko.observable('136-1933305'), 'UPC': '799114463243' },
    { 'Sku': ko.observable('O-8326148'), 'Vendor': 'NIKE', 'SeasonCode': '8203', 'Mfg_Id': ko.observable('988-9581949'), 'UPC': '214169993317' },
    { 'Sku': ko.observable('S-3499936'), 'Vendor': 'SPIN', 'SeasonCode': '1316', 'Mfg_Id': ko.observable('53-293776'), 'UPC': '056031627041' },
    { 'Sku': ko.observable('T-3017520'), 'Vendor': 'NEWB', 'SeasonCode': '8324', 'Mfg_Id': ko.observable('618-5930839'), 'UPC': '564298257170' },
    { 'Sku': ko.observable('D-5714561'), 'Vendor': 'NEWB', 'SeasonCode': '5064', 'Mfg_Id': ko.observable('771-449000'), 'UPC': '320243358630' },
    { 'Sku': ko.observable('E-8949341'), 'Vendor': 'SPERR', 'SeasonCode': '3925', 'Mfg_Id': ko.observable('66-7966428'), 'UPC': '746308297307' },
    { 'Sku': ko.observable('B-1663511'), 'Vendor': 'SPIN', 'SeasonCode': '5582', 'Mfg_Id': ko.observable('355-6892210'), 'UPC': '770734671966' },
    { 'Sku': ko.observable('Q-4792825'), 'Vendor': 'SPERR', 'SeasonCode': '9272', 'Mfg_Id': ko.observable('568-5691670'), 'UPC': '544050216942' },
    { 'Sku': ko.observable('F-8252222'), 'Vendor': 'NIKE', 'SeasonCode': '3017', 'Mfg_Id': ko.observable('761-2709272'), 'UPC': '520365806418' },
    { 'Sku': ko.observable('K-6041770'), 'Vendor': 'MERR', 'SeasonCode': '6955', 'Mfg_Id': ko.observable('977-7947723'), 'UPC': '825606474110' },
    { 'Sku': ko.observable('A-3083904'), 'Vendor': 'MERR', 'SeasonCode': '3329', 'Mfg_Id': ko.observable('424-7747754'), 'UPC': '150989633730' },
    { 'Sku': ko.observable('K-1142400'), 'Vendor': 'NIKE', 'SeasonCode': '6000', 'Mfg_Id': ko.observable('186-1305625'), 'UPC': '466167279725' },
    { 'Sku': ko.observable('Y-5826430'), 'Vendor': 'SPIN', 'SeasonCode': '352', 'Mfg_Id': ko.observable('515-152277'), 'UPC': '760487926007' },
    { 'Sku': ko.observable('N-5835832'), 'Vendor': 'HARR', 'SeasonCode': '4347', 'Mfg_Id': ko.observable('178-2703768'), 'UPC': '718736875212' },
    { 'Sku': ko.observable('S-338304'), 'Vendor': 'SPIN', 'SeasonCode': '5311', 'Mfg_Id': ko.observable('38-1033173'), 'UPC': '844399031465' },
    { 'Sku': ko.observable('I-9156391'), 'Vendor': 'SPIN', 'SeasonCode': '3018', 'Mfg_Id': ko.observable('927-9425288'), 'UPC': '863525028350' },
    { 'Sku': ko.observable('C-2751274'), 'Vendor': 'NEWB', 'SeasonCode': '7484', 'Mfg_Id': ko.observable('751-8371893'), 'UPC': '049245314075' },
    { 'Sku': ko.observable('S-2103827'), 'Vendor': 'SPERR', 'SeasonCode': '5959', 'Mfg_Id': ko.observable('340-9829917'), 'UPC': '278971302729' },
    { 'Sku': ko.observable('W-1450969'), 'Vendor': 'DOCK', 'SeasonCode': '3881', 'Mfg_Id': ko.observable('808-8260596'), 'UPC': '111056024865' },
    { 'Sku': ko.observable('M-5233983'), 'Vendor': 'REEB', 'SeasonCode': '9399', 'Mfg_Id': ko.observable('731-6006722'), 'UPC': '755056167406' },
    { 'Sku': ko.observable('P-5486922'), 'Vendor': 'SPIN', 'SeasonCode': '5589', 'Mfg_Id': ko.observable('478-7304938'), 'UPC': '832348795846' },
    { 'Sku': ko.observable('P-1161081'), 'Vendor': 'AX', 'SeasonCode': '4480', 'Mfg_Id': ko.observable('80-8088859'), 'UPC': '157210831755' },
    { 'Sku': ko.observable('H-7810360'), 'Vendor': 'HARR', 'SeasonCode': '9147', 'Mfg_Id': ko.observable('306-6122737'), 'UPC': '842281200339' },
    { 'Sku': ko.observable('A-7445252'), 'Vendor': 'NEWB', 'SeasonCode': '9320', 'Mfg_Id': ko.observable('219-8305546'), 'UPC': '398550281683' },
    { 'Sku': ko.observable('U-1907924'), 'Vendor': 'SPIN', 'SeasonCode': '6897', 'Mfg_Id': ko.observable('61-6195372'), 'UPC': '871640907551' },
    { 'Sku': ko.observable('E-4163172'), 'Vendor': 'MERR', 'SeasonCode': '7072', 'Mfg_Id': ko.observable('787-1890531'), 'UPC': '561793245240' },
    { 'Sku': ko.observable('V-6726398'), 'Vendor': 'REEB', 'SeasonCode': '4917', 'Mfg_Id': ko.observable('273-2946377'), 'UPC': '783687564222' },
    { 'Sku': ko.observable('J-9595537'), 'Vendor': 'NEWB', 'SeasonCode': '5181', 'Mfg_Id': ko.observable('984-6564740'), 'UPC': '660963520854' },
    { 'Sku': ko.observable('R-2184336'), 'Vendor': 'MERR', 'SeasonCode': '5155', 'Mfg_Id': ko.observable('915-1579626'), 'UPC': '726501693219'}]);
    return arr;
};