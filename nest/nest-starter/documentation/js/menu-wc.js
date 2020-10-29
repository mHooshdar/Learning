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
                    <a href="index.html" data-type="index-link">nest-starter documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' : 'data-target="#xs-controllers-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' :
                                            'id="xs-controllers-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' : 'data-target="#xs-injectables-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' :
                                        'id="xs-injectables-links-module-AppModule-5eb666c75fb687501e0fd3dd41727237"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-49c4ea6c0ea9a1ec5ea5e21237738c73-1"' : 'data-target="#xs-controllers-links-module-AppModule-49c4ea6c0ea9a1ec5ea5e21237738c73-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-49c4ea6c0ea9a1ec5ea5e21237738c73-1"' :
                                            'id="xs-controllers-links-module-AppModule-49c4ea6c0ea9a1ec5ea5e21237738c73-1"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' : 'data-target="#xs-controllers-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' :
                                            'id="xs-controllers-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' : 'data-target="#xs-injectables-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' :
                                        'id="xs-injectables-links-module-AuthModule-0245eb53638d9e8eb5795051ee0e54c4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyLibraryModule.html" data-type="entity-link">MyLibraryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MyLibraryModule-9f970f7ff819afe9546c8ee08d481437"' : 'data-target="#xs-injectables-links-module-MyLibraryModule-9f970f7ff819afe9546c8ee08d481437"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyLibraryModule-9f970f7ff819afe9546c8ee08d481437"' :
                                        'id="xs-injectables-links-module-MyLibraryModule-9f970f7ff819afe9546c8ee08d481437"' }>
                                        <li class="link">
                                            <a href="injectables/MyLibraryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyLibraryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyTestModule.html" data-type="entity-link">MyTestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' : 'data-target="#xs-controllers-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' :
                                            'id="xs-controllers-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' }>
                                            <li class="link">
                                                <a href="controllers/MyTestController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyTestController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' : 'data-target="#xs-injectables-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' :
                                        'id="xs-injectables-links-module-MyTestModule-fded31698ab90674c16561eb73c159cb"' }>
                                        <li class="link">
                                            <a href="injectables/MyTestService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MyTestService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link">TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' : 'data-target="#xs-controllers-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' :
                                            'id="xs-controllers-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' }>
                                            <li class="link">
                                                <a href="controllers/TasksController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' : 'data-target="#xs-injectables-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' :
                                        'id="xs-injectables-links-module-TasksModule-d8766037512f8d9bfacbbd0a11c194ac"' }>
                                        <li class="link">
                                            <a href="injectables/TasksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TasksService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/AaFilter.html" data-type="entity-link">AaFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/AaGateway.html" data-type="entity-link">AaGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/AaResolver.html" data-type="entity-link">AaResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthCredentialsDto.html" data-type="entity-link">AuthCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link">CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUploadDto.html" data-type="entity-link">FileUploadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForbiddenException.html" data-type="entity-link">ForbiddenException</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTasksFilterDto.html" data-type="entity-link">GetTasksFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link">HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyTest.html" data-type="entity-link">MyTest</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyTest2.html" data-type="entity-link">MyTest2</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link">Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskRepository.html" data-type="entity-link">TaskRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskStatusValidationPipe.html" data-type="entity-link">TaskStatusValidationPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link">UserRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSubscriber.html" data-type="entity-link">UserSubscriber</a>
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
                                    <a href="injectables/Aa.html" data-type="entity-link">Aa</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AaInterceptor.html" data-type="entity-link">AaInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AaMiddleware.html" data-type="entity-link">AaMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AaPipe.html" data-type="entity-link">AaPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CacheInterceptor.html" data-type="entity-link">CacheInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomValidationPipe.html" data-type="entity-link">CustomValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GqlAuthGuard.html" data-type="entity-link">GqlAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link">LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link">TimeoutInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link">TransformInterceptor</a>
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
                                <a href="guards/AaGuard.html" data-type="entity-link">AaGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CustomAuthGuard.html" data-type="entity-link">CustomAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link">RolesGuard</a>
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
                                <a href="interfaces/JwtPayload.html" data-type="entity-link">JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link">Response</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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