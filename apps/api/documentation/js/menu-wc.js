'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApartmentModule.html" data-type="entity-link" >ApartmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' : 'data-target="#xs-controllers-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' :
                                            'id="xs-controllers-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' }>
                                            <li class="link">
                                                <a href="controllers/ApartmentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApartmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' : 'data-target="#xs-injectables-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' :
                                        'id="xs-injectables-links-module-ApartmentModule-7751643f877bd41a4b0f4117a50c8b81d2435e61c305429fc5342790b4fdda7912b294b521476956a814ce0dea300b6aa92c2c4958bf10d87d7e0b4f2be603fc"' }>
                                        <li class="link">
                                            <a href="injectables/ApartmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApartmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' : 'data-target="#xs-controllers-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' :
                                            'id="xs-controllers-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' : 'data-target="#xs-injectables-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' :
                                        'id="xs-injectables-links-module-AppModule-aa9b00e3968b4c10837c9ee88f3ff2582c742b28787bc3f9581a604037bba25b1ea5bddba1442ee33fa21c597de2cade44c702f2985fc29e2d44eeeba88d211e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-bb63a43b42e64fdc2c9e3e9ea12328abc39ef67d154e4535d7dff22609d69818d5cc856402a0695b1a1f638647e851bbb4f865e3cb275bfa677b59d9f7f5f1b1"' : 'data-target="#xs-controllers-links-module-HealthModule-bb63a43b42e64fdc2c9e3e9ea12328abc39ef67d154e4535d7dff22609d69818d5cc856402a0695b1a1f638647e851bbb4f865e3cb275bfa677b59d9f7f5f1b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-bb63a43b42e64fdc2c9e3e9ea12328abc39ef67d154e4535d7dff22609d69818d5cc856402a0695b1a1f638647e851bbb4f865e3cb275bfa677b59d9f7f5f1b1"' :
                                            'id="xs-controllers-links-module-HealthModule-bb63a43b42e64fdc2c9e3e9ea12328abc39ef67d154e4535d7dff22609d69818d5cc856402a0695b1a1f638647e851bbb4f865e3cb275bfa677b59d9f7f5f1b1"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' : 'data-target="#xs-controllers-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' :
                                            'id="xs-controllers-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' : 'data-target="#xs-injectables-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' :
                                        'id="xs-injectables-links-module-UserModule-5c2368c7c8dab4567c45eb6f234ca382030af34d361ab2e2c5473dadca5e0ffb95bb2b88ff3cdce2c4dc995cd59bac83afaebbaf8be1e62941cc358fc122480a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthHelper.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthHelper</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Apartment.html" data-type="entity-link" >Apartment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ApartmentUser.html" data-type="entity-link" >ApartmentUser</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ApartmentResp.html" data-type="entity-link" >ApartmentResp</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateApartmentDto.html" data-type="entity-link" >CreateApartmentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateApartmentDto.html" data-type="entity-link" >UpdateApartmentDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthConfig.html" data-type="entity-link" >AuthConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseConfig.html" data-type="entity-link" >DatabaseConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserContext.html" data-type="entity-link" >UserContext</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});