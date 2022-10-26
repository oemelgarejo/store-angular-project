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
                    <a href="index.html" data-type="index-link">myng-store documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e423c6509fa4e4c4883c4974ede45fa041c9e967fde9a24b63c00e2b821bd4b660b6d49c506161db2323e2eeb236643324f3b963dac63bc2ebec7a62513bb81b"' : 'data-target="#xs-components-links-module-AppModule-e423c6509fa4e4c4883c4974ede45fa041c9e967fde9a24b63c00e2b821bd4b660b6d49c506161db2323e2eeb236643324f3b963dac63bc2ebec7a62513bb81b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e423c6509fa4e4c4883c4974ede45fa041c9e967fde9a24b63c00e2b821bd4b660b6d49c506161db2323e2eeb236643324f3b963dac63bc2ebec7a62513bb81b"' :
                                            'id="xs-components-links-module-AppModule-e423c6509fa4e4c4883c4974ede45fa041c9e967fde9a24b63c00e2b821bd4b660b6d49c506161db2323e2eeb236643324f3b963dac63bc2ebec7a62513bb81b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoryModule-084a5caa94e6b7eae88745e6e613a2e35737bc3dda3eee2b7bab16fd983671085e9d9307f7eb1cbf81b48f2219398afe462828c1b6385b0a72946d5249885f6b"' : 'data-target="#xs-components-links-module-CategoryModule-084a5caa94e6b7eae88745e6e613a2e35737bc3dda3eee2b7bab16fd983671085e9d9307f7eb1cbf81b48f2219398afe462828c1b6385b0a72946d5249885f6b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-084a5caa94e6b7eae88745e6e613a2e35737bc3dda3eee2b7bab16fd983671085e9d9307f7eb1cbf81b48f2219398afe462828c1b6385b0a72946d5249885f6b"' :
                                            'id="xs-components-links-module-CategoryModule-084a5caa94e6b7eae88745e6e613a2e35737bc3dda3eee2b7bab16fd983671085e9d9307f7eb1cbf81b48f2219398afe462828c1b6385b0a72946d5249885f6b"' }>
                                            <li class="link">
                                                <a href="components/CategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryRoutingModule.html" data-type="entity-link" >CategoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CmsModule.html" data-type="entity-link" >CmsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CmsModule-09acef393874059eac07be7f47e775de4efee1c287231ea9aa8c06e3e8f8332114e1b153e20cfb09692aedda35c0b2b1421eb0b605803c227c15ad0c1aecd416"' : 'data-target="#xs-components-links-module-CmsModule-09acef393874059eac07be7f47e775de4efee1c287231ea9aa8c06e3e8f8332114e1b153e20cfb09692aedda35c0b2b1421eb0b605803c227c15ad0c1aecd416"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CmsModule-09acef393874059eac07be7f47e775de4efee1c287231ea9aa8c06e3e8f8332114e1b153e20cfb09692aedda35c0b2b1421eb0b605803c227c15ad0c1aecd416"' :
                                            'id="xs-components-links-module-CmsModule-09acef393874059eac07be7f47e775de4efee1c287231ea9aa8c06e3e8f8332114e1b153e20cfb09692aedda35c0b2b1421eb0b605803c227c15ad0c1aecd416"' }>
                                            <li class="link">
                                                <a href="components/GridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CmsRoutingModule.html" data-type="entity-link" >CmsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' : 'data-target="#xs-components-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' :
                                            'id="xs-components-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' }>
                                            <li class="link">
                                                <a href="components/ImgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' : 'data-target="#xs-directives-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' :
                                        'id="xs-directives-links-module-SharedModule-62ad835a3939203cf765848df9d91bf667da609993aa9ad4fe7c2f03c27c93d93b50461f8fd6da6a3e0d9ccc31b93953568a98be013e337fbf843b84bfec1c70"' }>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WebsiteModule.html" data-type="entity-link" >WebsiteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' : 'data-target="#xs-components-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' :
                                            'id="xs-components-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecoveryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoveryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' : 'data-target="#xs-pipes-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' :
                                            'id="xs-pipes-links-module-WebsiteModule-efcdb24dc1253432058e24d2e9cc0d1e9712aaf75fb717547b8014148d574bc6a0052db5bc2c17a12b1b9c88315ea58577cae22a344afdd6c03217331ef44cbf"' }>
                                            <li class="link">
                                                <a href="pipes/ReversePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReversePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimeAgoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimeAgoPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WebsiteRoutingModule.html" data-type="entity-link" >WebsiteRoutingModule</a>
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
                                <a href="classes/Person.html" data-type="entity-link" >Person</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomPreloadService.html" data-type="entity-link" >CustomPreloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreService.html" data-type="entity-link" >StoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TimeInterceptor.html" data-type="entity-link" >TimeInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ExitGuard.html" data-type="entity-link" >ExitGuard</a>
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
                                <a href="interfaces/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateProductDTO.html" data-type="entity-link" >CreateProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnExit.html" data-type="entity-link" >OnExit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateProductDTO.html" data-type="entity-link" >UpdateProductDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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